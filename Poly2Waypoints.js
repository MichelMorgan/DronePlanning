class Poly2Waypoints
{
    _PathE=[];
    _PathN=[];

    _dE=[];
    _dN=[];
    _Head=[];

    _Dist=[];
    _N=[];
    _Inc=[];

    _SpacingAng=0.0;
	_MinWaySpace=0.0;
	_SpacingX=0.0;

    _WayE=[];
    _WayN=[];
    _WayHead=[];

	 constructor()
    {
      
    }

	Set(PathE,   PathN,
		 SpacingAng, MinWaySpace, SpacingX)
    {
        this._PathE = PathE;
	    this. _PathN = PathN;

	    this._SpacingAng = SpacingAng;

	    this._MinWaySpace = MinWaySpace;

	    this._SpacingX = SpacingX;

		this._dE=[];
		this._dN=[];
		this._Head=[];
	
		this._Dist=[];
		this._N=[];
		this._Inc=[];

		this._WayE=[];
		this._WayN=[];
		this._WayHead=[];

    }


    CalculateHeadings()
    {
        let E1, N1, E2, N2;
        let dE, dN;
        let Head;

        let Dist;

       

        for (let j = 0; j < this._PathE.length; j++)
        {
            let vdE=[];
            let vdN=[];
            let vHead=[];
            let vDist=[];

            for (let k = 0; k < (this._PathE[j].length) - 1; k++)	//-1
            {
                E1 = this._PathE[j][k];
                N1 = this._PathN[j][k];

                E2 = this._PathE[j][k + 1];
                N2 = this._PathN[j][k + 1];

                dE = E2 - E1;
                dN = N2 - N1;

                Head = Math.atan2(dE, dN) + Math.PI / 2.0;

                if (Head > 2.0 * Math.PI) Head -= 2.0 * Math.PI;
                if (Head < 0) Head += 2.0 * Math.PI;

                Dist = Math.sqrt(dE * dE + dN * dN);

                dE  /= Dist;				//normalized
                dN /= Dist;

                vdE.push(dE);
                vdN.push(dN);
                vHead.push(Head);

                vDist.push(Dist);
            }

            this._dE.push(vdE);
            this._dN.push(vdN);
            this._Head.push(vHead);

            this._Dist.push(vDist);
        }
    }
	
    HandleCorners()
    {
        let Head12, Head23;
        let Ang;
        let N;
        let Inc;

        

        for (let j = 0; j < this._PathE.length; j++)
        {
            let vN=[];
            let vInc=[];

            for (let k = 0; k < (this._PathE[j].length) - 1; k++)	//-1
            {
                

                if (k != (this._PathE[j].length) - 2)					// the next line to change the heading
                {
                    Head12 = this._Head[j][k];
                    Head23 = this._Head[j][k+1];
                    Ang = (Head12 + Math.PI) - Head23;

                    if (Ang > 2.0 * Math.PI) Ang -= 2.0 * Math.PI;
                    if (Ang < 0) Ang += 2.0 * Math.PI;

                    

                    if (Ang < Math.PI)
                    {
                        // Head12 .... add(+increements)  Head23

                        if (Head23 < Head12) Head23 += 2.0 * Math.PI;

                        Ang = Head23-Head12;

                        N = (Ang / 2.0) / this._SpacingAng + 1;				//Half the angle

                        Inc = (Ang / 2.0) / N;
                    }
                    else
                    {
                        // Head12 .... ( - increements)  Head23

                        if (Head23 > Head12) Head12 += 2.0 * Math.PI;

                        Ang = Head12 - Head23;

                        N = (Ang / 2.0) / this._SpacingAng + 1;				//Half the angle

                        Inc = -(Ang / 2.0) / N;						// -ve
                    }

                    vN.push(N);
                    vInc.push(Inc);
                    
                }

                

            }
            this._N.push(vN);
            this._Inc.push(vInc);
        }
    }

	CalcWayPoints()
    {
	    let Dist;

		let Beg,End;
		let BegDist;
		let EndDist;

		let MidDist;

		let BegN;
		let EndN;

		let BegInc;
		let EndInc;

		let MidN;
		let MidInc;

		let E, N, Head;
		
		let dE, dN;


		BegN=0;
		EndN=0;

		BegInc=0;
		EndInc=0;



		for (let j = 0; j < this._PathE.length; j++)
		{
			

			for (let k = 0; k < (this._PathE[j].length) -1; k++)			//-1
			{
				Dist = this._Dist[j][k];
				dE = this._dE[j][k];					// normalized
				dN = this._dN[j][k];

				if (Dist > 3 * this._MinWaySpace)
				{

					Beg = End = true;

					if (k == 0)
					{
						Beg = false;
					}

					if (k == (this._PathE[j].length) - 2)
					{
						End = false;
					}

					if (Beg == true)
					{
						BegN = this._N[j][k - 1];
						BegInc = this._Inc[j][k - 1];
						BegDist = BegN * this._MinWaySpace;
					}
					else
					{
						BegDist = 0;
					}
					if (End == true)
					{
						EndN = this._N[j][k];
						EndInc = this._Inc[j][k];
						EndDist = EndN * this._MinWaySpace;
					}
					else
					{
						EndDist = 0;
					}

					MidDist = Dist - BegDist - EndDist;

					if (MidDist < this._MinWaySpace)
					{
						

						if (Beg == true)
						{
							BegInc = BegInc * BegN;				//one shot
							BegN = 1;
							BegDist = this._MinWaySpace;
						}
						if (End == true)
						{
							EndInc = EndInc * EndN;				//one shot
							EndN = 1;
							EndDist = this._MinWaySpace;
						}

						MidDist = Dist - BegDist - EndDist;

						






					}

					

					MidN = MidDist / this._SpacingX + 1;

					MidInc = MidDist / MidN;

					if (MidInc < this._MinWaySpace)
					{
						MidN--;
						MidInc = MidDist / MidN;

						if (MidInc < this._MinWaySpace)
						{
							//int a;
							//a = 1;
							// Need an exception
						}
					}

					E = this._PathE[j][k];
					N = this._PathN[j][k];
					Head = this._Head[j][k];

					Head -= BegN * BegInc;

					if (Head > 2.0 * Math.PI) Head -= 2.0 * Math.PI;
					if (Head < 0) Head += 2.0 * Math.PI;




					//double E1 = _PathE[j][1];
					//double N1 = _PathN[j][1];

					this._WayE.push(E);
					this._WayN.push(N);
					this._WayHead.push(Head);

					if (Beg == true)
					{


						for (let i = 0; i < BegN; i++)
						{
							E += this._MinWaySpace * dE;
							N += this._MinWaySpace * dN;

							Head += BegInc;

							if (Head > 2.0 * Math.PI) Head -= 2.0 * Math.PI;
							if (Head < 0) Head += 2.0 * Math.PI;

							this._WayE.push(E);
							this._WayN.push(N);
							this._WayHead.push(Head);
						}
					}

					for (let i = 0; i < MidN; i++)
					{
						E += MidInc * dE;
						N += MidInc * dN;



						this._WayE.push(E);
						this._WayN.push(N);

						this._WayHead.push(Head);
					}

					if (End == true)
					{
						for (let i = 0; i < EndN; i++)
						{
							E += this._MinWaySpace * dE;
							N += this._MinWaySpace * dN;

							Head += EndInc;

							if (Head > 2.0 * Math.PI) Head -= 2.0 * Math.PI;
							if (Head < 0) Head += 2.0 * Math.PI;

							this._WayE.push(E);
							this._WayN.push(N);

							this._WayHead.push(Head);
						}
					}

					if (k != (this._PathE[j].length) - 2)
					{
						this._WayE.pop();
						this._WayN.pop();
						this._WayHead.pop();
					}
				}
			}
		}
    }


    Get()
    {
        return [this._WayE, this._WayN, this._WayHead];
    }

    RunAll()
    {
       this.CalculateHeadings();

	   this.HandleCorners();

	   this.CalcWayPoints();
    }

    

	


}


export default Poly2Waypoints;