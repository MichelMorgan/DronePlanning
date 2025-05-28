class PtInPolys
{
    _BE=[];
    _BN=[];

	_BEMax=0.0;

     constructor()
    {
      
    }

    Set(BE, BN, BEMax)
    {
        this._BE=BE;
        this._BN=BN;
        this._BEMax=BEMax;
    }

    GetIntersection( x1,  y1,  x2,  y2,  x3,  y3,  x4,  y4)
    {
        let x =0;
        let y = 0;

        let a, b, c, d;
        let e, f;
        let Den;

        let t12, t34;

        a = (x2 - x1);		b = (x3 - x4);			e = x3 - x1;
        c = (y2 - y1);		d = (y3 - y4);			f = y3 - y1;

        Den = a * d - b * c;

        if (Math.abs(Den) < 0.0000000000000000000001)						//parallel
        {
            return 0;
        }

        // e   b
        // 
        // f   d
        t12 = (e * d - b * f) / Den;

        // a   e
        //
        // c   f

        t34 = (a * f - e * c) / Den;

        if (t12 < 0 || t12>1.0 || t34 < 0 || t34>1.0)				//intersection is far. Check exact edge (==)
        {
            return 0;
        }

        x = x1 + t12 * (x2 - x1);

        y = y1 + t12 * (y2 - y1);

        return 1;

    }

    IsPointInPoly( x,  y)
    {
        let IsIn;

        IsIn = 0;

        for (let k = 0; k < this._BE.length; k++)
        {
            for (let i = 0; i < this._BE[k].length - 1; i++)
            {
                if (this.GetIntersection(this._BE[k][i], this._BN[k][i], this._BE[k][i + 1], this._BN[k][i + 1], x, y, this._BEMax + 10.0, y))				// +10.0 just a little bit
                {
                    IsIn = (IsIn==1)? 0:1;
                   
                    
                    
                }

            }
        }

        return IsIn;

    }

    
    
}

export default PtInPolys;