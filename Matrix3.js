// Matrix3 class converted from C++ to JavaScript
class Matrix3 
{
    _R0 = 0;
    _R1 = 0;
    _R2 = 0;
    _R3 = 0;
    _R4 = 0;
    _R5 = 0;
    _R6 = 0;
    _R7 = 0;
    _R8 = 0;
    _Dim = 3;

    constructor()
    {
      
    }

    construct(dim) 
    {
        this._Dim = dim;
    }

    Set1(v0, v1, v2)
    {
	    this._Dim=1;

	    this._R0=v0;
	    this._R1=v1;
	    this._R2=v2;
    }

    Set3( v0, v1, v2,
		  v3, v4, v5,
		  v6, v7, v8)
    {
	    this._Dim=3;

    	this._R0=v0;
	    this._R1=v1;
    	this._R2=v2;
    	this._R3=v3;
    	this._R4=v4;
    	this._R5=v5;
    	this._R6=v6;
    	this._R7=v7;
    	this._R8=v8;
    }

    SetRotX(ang)
    {
	    this._R0=1;	this._R1=0;			this._R2=0;
	    this._R3=0;	this._R4=Math.cos(ang);	this._R5=Math.sin(ang);
	    this._R6=0;	this._R7=-Math.sin(ang);	this._R8=Math.cos(ang);
    }

    SetRotY(ang)
    {
        this._R0=Math.cos(ang);	this._R1=0;	this._R2=-Math.sin(ang);
        this._R3=0;			this._R4=1;	this._R5=0;
        this._R6=Math.sin(ang);	this._R7=0;	this._R8=Math.cos(ang);
    }
    SetRotZ(ang)
    {
        this._R0=Math.cos(ang);	this._R1=Math.sin(ang);	this._R2=0;
        this._R3=-Math.sin(ang);	this._R4=Math.cos(ang);	this._R5=0;
        this._R6=0;			this._R7=0;			this._R8=1;
    }

    MMultiply(o) {
    const result = new Matrix3();
    if (o._Dim === 3) {
      result._R0 = this._R0*o._R0 + this._R1*o._R3 + this._R2*o._R6;
      result._R1 = this._R0*o._R1 + this._R1*o._R4 + this._R2*o._R7;
      result._R2 = this._R0*o._R2 + this._R1*o._R5 + this._R2*o._R8;
      result._R3 = this._R3*o._R0 + this._R4*o._R3 + this._R5*o._R6;
      result._R4 = this._R3*o._R1 + this._R4*o._R4 + this._R5*o._R7;
      result._R5 = this._R3*o._R2 + this._R4*o._R5 + this._R5*o._R8;
      result._R6 = this._R6*o._R0 + this._R7*o._R3 + this._R8*o._R6;
      result._R7 = this._R6*o._R1 + this._R7*o._R4 + this._R8*o._R7;
      result._R8 = this._R6*o._R2 + this._R7*o._R5 + this._R8*o._R8;
      result._Dim = 3;
    } else {
      result._R0 = this._R0*o._R0 + this._R1*o._R1 + this._R2*o._R2;
      result._R1 = this._R3*o._R0 + this._R4*o._R1 + this._R5*o._R2;
      result._R2 = this._R6*o._R0 + this._R7*o._R1 + this._R8*o._R2;
      result._Dim = 1;
    }
    return result;
  }

  Transpose() 
  {
    const result = new Matrix3();
    result._R0 = this._R0; result._R1 = this._R3; result._R2 = this._R6;
    result._R3 = this._R1; result._R4 = this._R4; result._R5 = this._R7;
    result._R6 = this._R2; result._R7 = this._R5; result._R8 = this._R8;
    result._Dim = this._Dim;
    return result;
  }

    Get() 
    {
        if (this._Dim === 1) 
        {
            return [this._R0, this._R1, this._R2];
        } 
        else 
        {
            return [this._R0, this._R1, this._R2,
                this._R3, this._R4, this._R5,
                this._R6, this._R7, this._R8];
        }
    }
}

export default Matrix3;
