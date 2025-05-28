
import Matrix3 from './Matrix3.js';

class CTransform {

    constructor() 
    {
        

        // WGS84
        this._a = 6378137.0; // Hard Coded
        this._invf = 298.257223563; // Hard Coded

        this._LinConvThreshold = 1.0e-5; // Hard Coded
        this._AngConvThreshold = 1.0e-3 / 3600.0 * this._Pi / 180.0; // Hard Coded

        this._b = this._a - this._a / this._invf;
        this._e2 = (this._a * this._a - this._b * this._b) / (this._a * this._a);

        this._R=new Matrix3();
        this._RTr=new Matrix3();

        this._Vec=new Matrix3();
        this._Vec2=new Matrix3();

        this._R.construct(3);
        this._RTr.construct(3);

        this._Vec.construct(1);
        this._Vec2.construct(1);
    }

    Geog2Ecef(Lon, Lat, Alt) 
    {
        let N;

        N = this._a / Math.sqrt(1.0 - this._e2 * Math.sin(Lat) * Math.sin(Lat));
        const X = (N + Alt) * Math.cos(Lat) * Math.cos(Lon);
        const Y = (N + Alt) * Math.cos(Lat) * Math.sin(Lon);
        const Z = (N * (1 - this._e2) + Alt) * Math.sin(Lat);
        return [ X, Y, Z ];
    }

    Ecef2Geog(X, Y, Z) 
    {
        let N;

        N = this._a;

        const XY = Math.sqrt(X * X + Y * Y);

        let Lon = Math.atan2(Y, X);
        if (Lon > this._Pi) Lon -= 2.0 * this._Pi;

        let Flag = true;
        let dval;
        let Lat = 0; // Initialize Lat

        let Alt=0;

        while (Flag) {
            Flag = false;

            dval = this._a / Math.sqrt(1.0 - (this._e2 * Math.sin(Lat) * Math.sin(Lat)));

            if (Math.abs(N - dval) > this._LinConvThreshold) Flag = true;

            N = dval;

            dval = Math.atan(Z * (N + Alt) / (XY * (N * (1.0 - this._e2) + Alt)));

            if (Math.abs(Lat - dval) > this._AngConvThreshold) Flag = true;

            Lat = dval;

            dval = XY / Math.cos(Lat) - N;
            if (Math.abs(Alt - dval) > this._LinConvThreshold) Flag = true;

            Alt = dval;
        }

        return [ Lon, Lat, Alt ];
    }

    SetAnchor(Lon0, Lat0, Alt0) {
        this._Lon0 = Lon0;
        this._Lat0 = Lat0;
        this._Alt0 = Alt0;

        const [ X0, Y0, Z0 ] = this.Geog2Ecef(this._Lon0, this._Lat0, this._Alt0);

        this._X0=X0;
        this._Y0=Y0;
        this._Z0=Z0;

        const RXX = new Matrix3();
        const RZZ = new Matrix3();

        RXX.construct(3);
        RZZ.construct(3);

        RXX.SetRotX(Math.PI / 2.0 - this._Lat0);
        RZZ.SetRotZ(Math.PI / 2.0 + this._Lon0);

        this._R = RXX.MMultiply(RZZ);
        this._RTr = this._R.Transpose();
    }

    Geog2Topo(Lon, Lat, Alt) 
    {
        const[ X, Y, Z ] = this.Geog2Ecef(Lon, Lat, Alt);

        this._Vec.Set1(X - this._X0, Y - this._Y0, Z - this._Z0);
        this._Vec2 = this._R.MMultiply(this._Vec);

        return this._Vec2.Get();
    }

    Topo2Geog(E, N, U) 
    {
        this._Vec.Set1(E, N, U);
        this._Vec2 = this._RTr.MMultiply(this._Vec);

        const [ X, Y, Z ] = this._Vec2.Get();
        return this.Ecef2Geog(X + this._X0, Y + this._Y0, Z + this._Z0);
    }
        
}

export default CTransform;
