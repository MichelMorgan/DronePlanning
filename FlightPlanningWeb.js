import ElevationService from './ElevationService.js';
import CTransform from './CTransform.js';

import PtInPolys from './PtInPolys.js';

import Poly2Waypoints from './Poly2Waypoints.js';

import Matrix3 from './Matrix3.js';

//import fs from 'fs';

class FlightPlanningWeb
{
	_ProjectName="";

	_F=0.0;
	_PixSize=0.0;
	_NAlong=0;
	_NAcros=0;
	_H=0.0;

	_D2=0;
	_FlightDir=0.0;
	_Overlap=0.0;
	_Sidelap=0.0;
	_SwitchDirection=0;
	_SwitchBeginEnd=0;
	_ExtendCoverage=0;

	_SnapE=0.0;
	_SnapN=0.0;
	_MoveStep=0.0;

	_D3=0;
	_SpacingX=0.0;
	_SpacingAng=0.0;
	_MinTilt=0.0;
	_StepTilt=0.0;
	_MaxTilt=0.0;
	_ReverseDirection=0;

	_BuildingHt=0.0;
	_NFootPrint=0;
	_Add2GoogleH=0.0;
	_MaxFootPrintLen=0.0;

	_BLon=[];
	_BLat=[];

	_PathLon=[];
	_PathLat=[];


	_LaunchLon=0.0;
	_LaunchLat=0.0;
	
	_Fov=0.0;

	_LaunchAlt=0.0;

	_BE=[];
	_BN=[];

	_PathE=[];
	_PathN=[];

	_GAlong=0.0;
	_GAcros=0.0;

	_BAlong=0.0;
	_BAcros=0.0;

	_BEMin=0.0;
	_BEMax=0.0;
	_BNMin=0.0;
	_BNMax=0.0;

	_PosE=[];
	_PosN=[];

	_PosLon=[];
	_PosLat=[];
	_PosAlt=[];

	_FootPrintE=[];
	_FootPrintN=[];

	_FootPrintLon=[];
	_FootPrintLat=[];

	_PosE2=[];
	_PosN2=[];
	_PosHead2=[];
	_PosLon2=[];
	_PosLat2=[];

	_FootPrintE2=[];
	_FootPrintN2=[];

	_FootPrintLon2=[];
	_FootPrintLat2=[];

	_Tilt=[];
	
	_PosE3=[];
	_PosN3=[];
	_PosLon3=[];
	_PosLat3=[];
	_PosHead3=[];
	_PosTilt3=[];

	_PosBackE3=[];
	_PosBackN3=[];
	_PosBackAlt3=[];
	_PosBackLon3=[];
	_PosBackLat3=[];

	_Ind=[];

	_FootPrintE3=[];
	_FootPrintN3=[];
	_FootPrintAlt3=[];

	_FootPrintLon3=[];
	_FootPrintLat3=[];

	_Results='';

	_Kml2DString = '';
	_Csv2DString = '';
	_Csv2DVideoString = '';

	_Kml3DString = '';
	_Csv3DString = '';
	_Csv3DVideoString = '';

	constructor()
	{
		this._Cst = new CTransform();

		this._PtInPolys = new PtInPolys();

		this._Poly2Waypoints = new Poly2Waypoints();
	}

	Set(ProjectName,
		  F, PixSize, NAlong, NAcros, H,
		 D2,  FlightDir,  Overlap,  Sidelap,  SwitchDirection,  SwitchBeginEnd,  ExtendCoverage,
		 SnapE, SnapN, MoveStep,
		 D3,  SpacingX,  SpacingAng,  MinTilt,  StepTilt,  MaxTilt, ReverseDirection,
		 BuildingHt,  NFootPrint,  Add2GoogleH,  MaxFootPrintLen,
		 BLon,  BLat,
		 PathLon,  PathLat,
		 LaunchLon,  LaunchLat)
	{
		this._ProjectName=ProjectName;

		this._F=F;
		this._PixSize=PixSize;
		this._NAlong=NAlong;
		this._NAcros=NAcros;
		this._H=H;
		this._D2=D2;
		this._FlightDir=FlightDir;
		this._Overlap=Overlap;
		this._Sidelap=Sidelap;
		this._SwitchDirection=SwitchDirection;
		this._SwitchBeginEnd=SwitchBeginEnd;
		this._ExtendCoverage=ExtendCoverage;
		this._SnapE=SnapE;
		this._SnapN=SnapN;
		this._MoveStep=MoveStep;
		this._D3=D3;
		this._SpacingX=SpacingX;
		this._SpacingAng=SpacingAng;
		this._MinTilt=MinTilt;
		this._StepTilt=StepTilt;
		this._MaxTilt=MaxTilt;
		this._ReverseDirection=ReverseDirection;
		this._BuildingHt=BuildingHt;
		this._NFootPrint=NFootPrint;
		this._Add2GoogleH=Add2GoogleH;
		this._MaxFootPrintLen=MaxFootPrintLen;
		this._BLon=BLon;
		this._BLat=BLat;
		this._PathLon=PathLon;
		this._PathLat=PathLat;
		this._LaunchLon=LaunchLon;
		this._LaunchLat=LaunchLat;

			
			
			
			
			this._BE=[];
			this._BN=[];

			this._PathE=[];
			this._PathN=[];


			this._PosE=[];
			this._PosN=[];

			this._PosLon=[];
			this._PosLat=[];
			this._PosAlt=[];

			this._FootPrintE=[];
			this._FootPrintN=[];

			this._FootPrintLon=[];
			this._FootPrintLat=[];

			this._PosE2=[];
			this._PosN2=[];
			this._PosHead2=[];
			this._PosLon2=[];
			this._PosLat2=[];

			this._FootPrintE2=[];
			this._FootPrintN2=[];

			this._FootPrintLon2=[];
			this._FootPrintLat2=[];

			this._Tilt=[];
			
			this._PosE3=[];
			this._PosN3=[];
			this._PosLon3=[];
			this._PosLat3=[];
			this._PosHead3=[];
			this._PosTilt3=[];

			this._PosBackE3=[];
			this._PosBackN3=[];
			this._PosBackAlt3=[];
			this._PosBackLon3=[];
			this._PosBackLat3=[];

			this._Ind=[];

			this._FootPrintE3=[];
			this._FootPrintN3=[];
			this._FootPrintAlt3=[];

			this._FootPrintLon3=[];
			this._FootPrintLat3=[];

				

	}

	SetUnstructured(...args)
	{
		//let N=args.length;

		let i=0;
		this._F=args[i]; i++;
		this._PixSize=args[i]; i++;
		this._NAlong=args[i]; i++;
		this._NAcros=args[i]; i++;
		this._H=args[i]; i++;
		this._D2=args[i]; i++;
		this._FlightDir=args[i]; i++;
		this._Overlap=args[i]; i++;
		this._Sidelap=args[i]; i++;
		this._SwitchDirection=args[i]; i++;
		this._SwitchBeginEnd=args[i]; i++;
		this._ExtendCoverage=args[i]; i++;
		this._SnapE=args[i]; i++;
		this._SnapN=args[i]; i++;
		this._MoveStep=args[i]; i++;
		this._D3=args[i]; i++;
		this._SpacingX=args[i]; i++;
		this._SpacingAng=args[i]; i++;
		this._MinTilt=args[i]; i++;
		this._StepTilt=args[i]; i++;
		this._MaxTilt=args[i]; i++;
		this._ReverseDirection=args[i]; i++;
		this._BuildingHt=args[i]; i++;
		this._NFootPrint=args[i]; i++;
		this._Add2GoogleH=args[i]; i++;
		this._MaxFootPrintLen=args[i]; i++;

		

		this._BLon=[];
		this._BLat=[];

		let NBs=args[i]; i++;

		for (let k = 0; k < NBs; k++)
		{
			let N = args[i]; i++;

			let vLon=[];
			let vLat=[];

			for (let j = 0; j < N; j++)
			{
				let Lon = args[i]; i++;
				let Lat = args[i]; i++;

				vLon.push(Lon);
				vLat.push(Lat);
			}
			this._BLon.push(vLon);
			this._BLat.push(vLat);
		}


		this._PathLon=[];
		this._PathLat=[];
		
		let NPaths = args[i]; i++;

		for (let k = 0; k < NPaths; k++)
		{
			let N = args[i]; i++;

			let vLon=[];
			let vLat=[];

			for (let j = 0; j < N; j++)
			{
				let Lon = args[i]; i++;
				let Lat = args[i]; i++;

				vLon.push(Lon);
				vLat.push(Lat);
			}
			this._PathLon.push(vLon);
			this._PathLat.push(vLat);
		}

		this._LaunchLon = args[i]; i++;
		this._LaunchLat = args[i]; i++;




		
			
			
			
			this._BE=[];
			this._BN=[];

			this._PathE=[];
			this._PathN=[];


			this._PosE=[];
			this._PosN=[];

			this._PosLon=[];
			this._PosLat=[];
			this._PosAlt=[];

			this._FootPrintE=[];
			this._FootPrintN=[];

			this._FootPrintLon=[];
			this._FootPrintLat=[];

			this._PosE2=[];
			this._PosN2=[];
			this._PosHead2=[];
			this._PosLon2=[];
			this._PosLat2=[];

			this._FootPrintE2=[];
			this._FootPrintN2=[];

			this._FootPrintLon2=[];
			this._FootPrintLat2=[];

			this._Tilt=[];
			
			this._PosE3=[];
			this._PosN3=[];
			this._PosLon3=[];
			this._PosLat3=[];
			this._PosHead3=[];
			this._PosTilt3=[];

			this._PosBackE3=[];
			this._PosBackN3=[];
			this._PosBackAlt3=[];
			this._PosBackLon3=[];
			this._PosBackLat3=[];

			this._Ind=[];

			this._FootPrintE3=[];
			this._FootPrintN3=[];
			this._FootPrintAlt3=[];

			this._FootPrintLon3=[];
			this._FootPrintLat3=[];







	}

	SetString(str)
	{
		let vals = str.split(/\s+/);

		let i=0;
		this._F=parseFloat(vals[i]); i++;
		this._PixSize=parseFloat(vals[i]); i++;
		this._NAlong=parseInt(vals[i]); i++;
		this._NAcros=parseInt(vals[i]); i++;
		this._H=parseFloat(vals[i]); i++;
		this._D2=parseInt(vals[i]); i++;
		this._FlightDir=parseFloat(vals[i]); i++;
		this._Overlap=parseFloat(vals[i]); i++;
		this._Sidelap=parseFloat(vals[i]); i++;
		this._SwitchDirection=parseInt(vals[i]); i++;
		this._SwitchBeginEnd=parseInt(vals[i]); i++;
		this._ExtendCoverage=parseInt(vals[i]); i++;
		this._SnapE=parseFloat(vals[i]); i++;
		this._SnapN=parseFloat(vals[i]); i++;
		this._MoveStep=parseFloat(vals[i]); i++;
		this._D3=parseInt(vals[i]); i++;
		this._SpacingX=parseFloat(vals[i]); i++;
		this._SpacingAng=parseFloat(vals[i]); i++;
		this._MinTilt=parseFloat(vals[i]); i++;
		this._StepTilt=parseFloat(vals[i]); i++;
		this._MaxTilt=parseFloat(vals[i]); i++;
		this._ReverseDirection=parseInt(vals[i]); i++;
		this._BuildingHt=parseFloat(vals[i]); i++;
		this._NFootPrint=parseInt(vals[i]); i++;
		this._Add2GoogleH=parseFloat(vals[i]); i++;
		this._MaxFootPrintLen=parseFloat(vals[i]); i++;

		

		this._BLon=[];
		this._BLat=[];

		let NBs=parseInt(vals[i]); i++;

		for (let k = 0; k < NBs; k++)
		{
			let N = parseInt(vals[i]); i++;

			let vLon=[];
			let vLat=[];

			for (let j = 0; j < N; j++)
			{
				let Lon = parseFloat(vals[i]); i++;
				let Lat = parseFloat(vals[i]); i++;

				vLon.push(Lon);
				vLat.push(Lat);
			}
			this._BLon.push(vLon);
			this._BLat.push(vLat);
		}


		this._PathLon=[];
		this._PathLat=[];
		
		let NPaths = parseInt(vals[i]); i++;

		for (let k = 0; k < NPaths; k++)
		{
			let N = parseInt(vals[i]); i++;

			let vLon=[];
			let vLat=[];

			for (let j = 0; j < N; j++)
			{
				let Lon = parseFloat(vals[i]); i++;
				let Lat = parseFloat(vals[i]); i++;

				vLon.push(Lon);
				vLat.push(Lat);
			}
			this._PathLon.push(vLon);
			this._PathLat.push(vLat);
		}

		this._LaunchLon = parseFloat(vals[i]); i++;
		this._LaunchLat = parseFloat(vals[i]); i++;

				

	
			
			
			
			this._BE=[];
			this._BN=[];

			this._PathE=[];
			this._PathN=[];


			this._PosE=[];
			this._PosN=[];

			this._PosLon=[];
			this._PosLat=[];
			this._PosAlt=[];

			this._FootPrintE=[];
			this._FootPrintN=[];

			this._FootPrintLon=[];
			this._FootPrintLat=[];

			this._PosE2=[];
			this._PosN2=[];
			this._PosHead2=[];
			this._PosLon2=[];
			this._PosLat2=[];

			this._FootPrintE2=[];
			this._FootPrintN2=[];

			this._FootPrintLon2=[];
			this._FootPrintLat2=[];

			this._Tilt=[];
			
			this._PosE3=[];
			this._PosN3=[];
			this._PosLon3=[];
			this._PosLat3=[];
			this._PosHead3=[];
			this._PosTilt3=[];

			this._PosBackE3=[];
			this._PosBackN3=[];
			this._PosBackAlt3=[];
			this._PosBackLon3=[];
			this._PosBackLat3=[];

			this._Ind=[];

			this._FootPrintE3=[];
			this._FootPrintN3=[];
			this._FootPrintAlt3=[];

			this._FootPrintLon3=[];
			this._FootPrintLat3=[];



	}
	

	async ConvertUnits()
	{
		this._FlightDir *= Math.PI / 180.0;

		// to m

		this._F /= 1000.0;
		this._PixSize /= (1000.0 * 1000.0);

		this._Overlap /= 100.0;
		this._Sidelap /= 100.0;

		this._SpacingAng *= Math.PI / 180.0;

		this._MinTilt *= Math.PI / 180.0;
		this._StepTilt *= Math.PI / 180.0;
		this._MaxTilt *= Math.PI / 180.0;


		
		let FovAcros = 2.0 * Math.atan(this._PixSize * this._NAcros / 2.0 / this._F);
		let FovAlong = 2.0 * Math.atan(this._PixSize * this._NAlong / 2.0 / this._F);

		this._Fov = (FovAcros > FovAlong) ? FovAcros : FovAlong;

		this._Fov *= 180.0 / Math.PI;

	}

	async GetLaunchPointZ()
	{
		//console.log('1');

		//console.log(`Coords, _Lon = ${this._LaunchLon} , _Lat = ${this._LaunchLat} , _Alt = ${this._LaunchAlt}`);

		const service = new ElevationService(this._LaunchLat, this._LaunchLon);

		const elevation = await service.getFirstAvailableElevation();

		console.log("Elevation:", elevation);

		this._LaunchAlt = elevation;

		//(async () => {
  		//	const elevation = await service.getFirstAvailableElevation();
  		//	console.log("Elevation:", elevation);

		//	this._LaunchAlt = elevation;

			
		//})();

		//const elevation = service.getFirstAvailableElevation();
		//console.log("Elevation:", elevation);
		//if (typeof elevation === 'string' ||elevation instanceof String)
		//	this._LaunchAlt =   parseFloat(elevation);
		//else
		//	this._LaunchAlt = elevation;

		

		//service.getAllElevations((elevation) => {
  		//	console.log("Elevation:", elevation);
		//	this._LaunchAlt =   elevation;
		//});

		//(async () => {
  		//	const elevation = await service.getAllElevations();
  		//	console.log("Elevation:", elevation);
		//	this._LaunchAlt =   elevation;
		//})();

		

		//service.getAllElevations().then(elevation => {
  			//console.log("Elevation:", elevation);

			//this._LaunchAlt =  elevation;
			//console.log(`Coords, _Lon = ${this._LaunchLon} , _Lat = ${this._LaunchLat} , _Alt = ${this._LaunchAlt}`);

			//	this.RunAll2();
  					
		
			//	});

		//(async () => 
		//{
  	    //	const service = new ElevationService(this._LaunchLat, this._LaunchLon);

  	    //	const elevation = await service.getAllElevations();
  				
  		//	this._LaunchAlt =  elevation;

		//	console.log(`Coords, _Lon = ${this._LaunchLon} , _Lat = ${this._LaunchLat} , _Alt = ${this._LaunchAlt}`);

			

		//})();

	}

	CalculateCameraSpecifics()
	{
		this._GAlong = this._NAlong * this._PixSize * this._H / this._F;
		this._GAcros = this._NAcros * this._PixSize * this._H / this._F;

		this._BAlong = this._GAlong - this._Overlap * this._GAlong;

		this._BAcros = this._GAcros - this._Sidelap * this._GAcros;
	}

	SetAnchor()
	{
		this._LaunchLon *= Math.PI / 180.0;
		this._LaunchLat *= Math.PI / 180.0;

		this._Cst.SetAnchor(this._LaunchLon, this._LaunchLat, this._LaunchAlt);

	}

	GetMetricBounds()
	{
			
		//let E, N, U;

		let Altk = this._LaunchAlt;				//approx

		for (let k = 0; k < this._BLon.length; k++)
		{
			let vE=[];
			let vN=[];
			for (let j = 0; j < this._BLon[k].length; j++)
			{
				let Lonk = this._BLon[k][j] * Math.PI/180.0;
				let Latk = this._BLat[k][j] * Math.PI / 180.0;

				const[ E, N, U ] = this._Cst.Geog2Topo(Lonk, Latk, Altk);

				vE.push(E);
				vN.push(N);

			}

			vE.push(vE[0]);										// adding the first point
			vN.push(vN[0]);										// to make Point in Poly works

			this._BE.push(vE);
			this._BN.push(vN);
			
		}

		//console.log(`_BE, ${this._BE}`);
		//console.log(`_BN, ${this._BN}`);

	}

	Rotate(ang)
	{
		let Cos, Sin;
		let E, N;
		let E2, N2;

		Cos = Math.cos(ang);
		Sin = Math.sin(ang);


		E = this._SnapE;
		N = this._SnapN;

		// E2      Cos -Sin    E							//check to reverse -
		// N2     Sin Cos    N

		E2 = Cos * E - Sin * N;
		N2 = Sin * E + Cos * N;

		this._SnapE = E2;
		this._SnapN = N2;


		for (let k = 0; k < this._BE.length; k++)
		{
			for (let j = 0; j < this._BE[k].length; j++)
			{
				E = this._BE[k][j];
				N = this._BN[k][j];

				// E2      Cos -Sin    E							//check to reverse -
				// N2     Sin Cos    N

				E2 = Cos * E - Sin * N;
				N2 = Sin * E + Cos * N;

				this._BE[k][j] = E2;
				this._BN[k][j] = N2;

			}

			
		}
		
		for (let k = 0; k < this._PosE.length; k++)
		{
			E = this._PosE[k];
			N = this._PosN[k];

			E2 = Cos * E - Sin * N;
			N2 = Sin * E + Cos * N;

			this._PosE[k] = E2;
			this._PosN[k] = N2;
		}

		for (let k = 0; k < this._FootPrintE.length; k++)
		{
			for (let j = 0; j < this._FootPrintE[k].length; j++)
			{
				E = this._FootPrintE[k][j];
				N = this._FootPrintN[k][j];

				E2 = Cos * E - Sin * N;
				N2 = Sin * E + Cos * N;

				this._FootPrintE[k][j] = E2;
				this._FootPrintN[k][j] = N2;
			}


		}
	}

	GetMinMaxEN()
	{
		let E, N;

		this._BEMin = this._BNMin = 9e99;
		this._BEMax = this._BNMax = -9e99;

		for (let k = 0; k < this._BE.length; k++)
		{
			for (let j = 0; j < this._BE[k].length; j++)
			{
				E = this._BE[k][j];
				N = this._BN[k][j];

				if (E > this._BEMax) this._BEMax = E;
				if (E < this._BEMin) this._BEMin = E;

				if (N > this._BNMax) this._BNMax = N;
				if (N < this._BNMin) this._BNMin = N;
			}

		}
	}

	Plan_2D()
	{

		//console.log('remove');

		//this._SwitchDirection =1;
		//this._SwitchBeginEnd =1;
		//this._ExtendCoverage=1;
		//console.log('remove');



		let nx, ny;


		let e, n;

		let E=[];
		let N=[];

		this._PtInPolys.Set(this._BE, this._BN, this._BEMax);

		

		


		this._BEMin = this._BEMin - 5.0 * this._BAcros;					// 5 times for safety;
		this._BEMax = this._BEMax + 5.0 * this._BAcros;					// 5 times for safety;

		this._BNMin = this._BNMin - 5.0 * this._BAlong;					// 5 times for safety;
		this._BNMax = this._BNMax + 5.0 * this._BAlong;					// 5 times for safety;

		nx = Math.floor((this._SnapE - this._BEMin) / this._BAcros);
		this._BEMin = this._SnapE - nx * this._BAcros;

		ny = Math.floor((this._SnapN - this._BNMin) / this._BAlong);
		this._BNMin = this._SnapN - ny * this._BAlong;

		nx = Math.floor((this._BEMax - this._BEMin) / this._BAcros);
		ny = Math.floor((this._BNMax - this._BNMin) / this._BAlong);

		
		for (let x = 0; x < nx; x++)
		{
			e = this._BEMin + x * this._BAcros;
			E.push(e);
		}
		for (let y = 0; y < ny; y++)
		{
			n = this._BNMin + y * this._BAlong;

			N.push(n);
		}

		for (let j = 0; j < nx; j++)
		{
			if (this._SwitchBeginEnd == 0)
			{
				e = E[j];
			}
			else
			{
				e = E[nx - 1 - j];
			}

			for (let i = 0; i < ny; i++)
			{
				if (this._SwitchDirection == 0)
				{
					if (j % 2 == 0)
					{
						n = N[i];
					}
					else
					{
						n = N[ny - 1 - i];
					}
				}
				else
				{
					if (j % 2 == 0)
					{
						n = N[ny - 1 - i];
					}
					else
					{
						n = N[i];
					}
				}

				if (this._PtInPolys.IsPointInPoly(e, n))
				{
					this._PosE.push(e);
					this._PosN.push(n);
				}
				else if (this._ExtendCoverage == 1)
				{
					if (this._PtInPolys.IsPointInPoly(e - this._GAcros / 2.0, n - this._GAlong / 2.0) ||
						this._PtInPolys.IsPointInPoly(e - this._GAcros / 2.0, n + this._GAlong / 2.0) ||
						this._PtInPolys.IsPointInPoly(e + this._GAcros / 2.0, n + this._GAlong / 2.0) ||
						this._PtInPolys.IsPointInPoly(e + this._GAcros / 2.0, n - this._GAlong / 2.0))
					{
						this._PosE.push(e);
						this._PosN.push(n);
					}

				}
			}
		}


		
		for (let k = 0; k < this._PosE.length; k++)
		{
			e = this._PosE[k];
			n = this._PosN[k];

			let FootPrintE=[]
			let FootPrintN=[];

			FootPrintE.push(e - this._GAcros / 2.0);
			FootPrintN.push(n - this._GAlong / 2.0);

			FootPrintE.push(e - this._GAcros / 2.0);
			FootPrintN.push(n + this._GAlong / 2.0);

			FootPrintE.push(e + this._GAcros / 2.0);
			FootPrintN.push(n + this._GAlong / 2.0);

			FootPrintE.push(e + this._GAcros / 2.0);
			FootPrintN.push(n - this._GAlong / 2.0);

			this._FootPrintE.push(FootPrintE);
			this._FootPrintN.push(FootPrintN);
		}	
			
	}

	GetGeographic()
	{
		let E, N,U;
		let Lon, Lat, Alt;

		U = this._H;

		for (let k = 0; k < this._PosE.length; k++)
		{
			E = this._PosE[k];
			N = this._PosN[k];

			[Lon, Lat, Alt]=this._Cst.Topo2Geog(E, N, U);

			Lon *= 180.0 / Math.PI;
			Lat *= 180.0 / Math.PI;

			this._PosLon.push(Lon);
			this._PosLat.push(Lat);
			this._PosAlt.push(Alt);
		}

		

		U = 0;

		for (let k = 0; k < this._FootPrintE.length; k++)
		{
			let vLon=[];
			let vLat=[];

			for (let j = 0; j < this._FootPrintE[k].length; j++)
			{
				E = this._FootPrintE[k][j];
				N = this._FootPrintN[k][j];

				let [Lon, Lat, Alt] = this._Cst.Topo2Geog(E, N, U);

				Lon *= 180.0 / Math.PI;
				Lat *= 180.0 / Math.PI;

				vLon.push(Lon);
				vLat.push(Lat);
			}
			this._FootPrintLon.push(vLon);
			this._FootPrintLat.push(vLat);

		}

		U = this._H;

		for (let k = 0; k < this._PosE2.length; k++)
		{
			E = this._PosE2[k];
			N = this._PosN2[k];

			[Lon, Lat, Alt] = this._Cst.Topo2Geog(E, N, U);

			Lon *= 180.0 / Math.PI;
			Lat *= 180.0 / Math.PI;

			this._PosLon2.push(Lon);
			this._PosLat2.push(Lat);

			this._PosHead2[k] = this._PosHead2[k] * 180.0 / Math.PI;			// at the same time
			
		}

		U = 0;

		for (let k = 0; k < this._PosE2.length; k++)
		{
			

			let vLon=[];
			let vLat=[];

			for (let j = 0; j < this._FootPrintE2[k].length; j++)
			{
				E = this._FootPrintE2[k][j];
				N = this._FootPrintN2[k][j];

				[Lon, Lat, Alt]=this._Cst.Topo2Geog(E, N, U);

				Lon *= 180.0 / Math.PI;
				Lat *= 180.0 / Math.PI;

				vLon.push(Lon);
				vLat.push(Lat);
			}
			this._FootPrintLon2.push(vLon);
			this._FootPrintLat2.push(vLat);
		}



		for (let k = 0; k < this._PosE3.length; k++)
		{
			E = this._PosE3[k];
			N = this._PosN3[k];

			[Lon, Lat, Alt]=this._Cst.Topo2Geog(E, N, U);

			Lon *= 180.0 / Math.PI;
			Lat *= 180.0 / Math.PI;

			this._PosLon3.push(Lon);
			this._PosLat3.push(Lat);

			this._PosHead3[k] = this._PosHead3[k] * 180.0 / Math.PI;			// at the same time
			this._PosTilt3[k] = this._PosTilt3[k] * 180.0 / Math.PI;


			E = this._PosBackE3[k];
			N = this._PosBackN3[k];

			[Lon, Lat, Alt] = this._Cst.Topo2Geog(E, N, U);

			Lon *= 180.0 / Math.PI;
			Lat *= 180.0 / Math.PI;

			this._PosBackLon3.push(Lon);
			this._PosBackLat3.push(Lat);

			let vLon=[];
			let vLat=[];

			for (let j = 0; j < this._FootPrintE3[k].length; j++)
			{
				E = this._FootPrintE3[k][j];
				N = this._FootPrintN3[k][j];

				let [Lon, Lat, Alt]=this._Cst.Topo2Geog(E, N, U);

				Lon *= 180.0 / Math.PI;
				Lat *= 180.0 / Math.PI;

				vLon.push(Lon);
				vLat.push(Lat);
			}
			this._FootPrintLon3.push(vLon);
			this._FootPrintLat3.push(vLat);
		}

		for (let k = 0; k < this._Tilt.length; k++)
		{
			this._Tilt[k] = this._Tilt[k] * 180.0 / Math.PI;
		}
			
	}

	PrintResults()
	{
		this._Results='';

		this._Results += this._PosE.length +'\n';

		
		for (let k = 0; k < this._PosE.length; k++)
		{
			

			this._Results += this._PosLon[k] +'\n';
			this._Results += this._PosLat[k] +'\n';
		}

		this._Results += this._FootPrintLon.length +'\n';
		
		for (let k = 0; k < this._FootPrintLon.length; k++)
		{
			this._Results += this._FootPrintLon[k].length +'\n';
			
			for (let j = 0; j < this._FootPrintLon[k].length; j++)
			{
				this._Results += this._FootPrintLon[k][j] +'\n';
				this._Results += this._FootPrintLat[k][j] +'\n';
			}
		}

		this._Results += this._PosE2.length +'\n';

		for (let k = 0; k < this._PosE2.length; k++)
		{


			this._Results += this._PosLon2[k] +'\n';
			this._Results += this._PosLat2[k] +'\n';
		}

		this._Results += this._FootPrintLon2.length +'\n';

		for (let k = 0; k < this._FootPrintLon2.length; k++)
		{
			this._Results += this._FootPrintLon2[k].length +'\n';
			for (let j = 0; j < this._FootPrintLon2[k].length; j++)
			{
				this._Results += this._FootPrintLon2[k][j] +'\n';
				this._Results += this._FootPrintLat2[k][j] +'\n';
			}
		}


	}

	Create2DKml()
	{
		this._Kml2DString = '';

		let FinalTilt;
		let FinalH;
		let Shift;
		let FinalLon, FinalLat;
		let E, N, Lon, Lat;
		let dummy;

		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		FinalTilt = 30.0;											//HC
		FinalH = this._H + this._Add2GoogleH * 2;							//2
		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		FinalTilt *= Math.PI / 180.0;

		Shift = FinalH * Math.tan(FinalTilt);

		[FinalLon, FinalLat, dummy]=this._Cst.Topo2Geog(0, -Shift, 0);

		this._Kml2DString +='<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n';
		

		

		this._Kml2DString +='<kml xmlns=\"http://www.opengis.net/kml/2.2\"\n';
		this._Kml2DString +='xmlns:gx=\"http://www.google.com/kml/ext/2.2\">\n';
		this._Kml2DString +='<Document>\n';
		this._Kml2DString +=' <Style id=\"RedLine\"> \n';
		this._Kml2DString +='  <LineStyle>  \n';
		this._Kml2DString +='   <color>#ff0000ff</color>\n';
		this._Kml2DString +='   <width>5</width>\n';
		this._Kml2DString +='  </LineStyle> \n';
		this._Kml2DString +=' </Style>\n';
		this._Kml2DString +=' <Style id=\"BlueLine\"> \n';
		this._Kml2DString +='  <LineStyle>  \n';
		this._Kml2DString +='   <color>#ffff0000</color>\n';
		this._Kml2DString +='   <width>5</width>\n';
		this._Kml2DString +='  </LineStyle> \n';
		this._Kml2DString +=' </Style>\n';
		this._Kml2DString +=' <Style id=\"RedPoly\">\n';
		this._Kml2DString +='  <LineStyle>\n';
		this._Kml2DString +='\n';

		this._Kml2DString +='\n';
		this._Kml2DString +='   <color>#ff0000ff</color>\n';
		this._Kml2DString +='   <width>5</width>\n';
		this._Kml2DString +='  </LineStyle>\n';
		this._Kml2DString +='  <PolyStyle> \n';
		this._Kml2DString +='   <color>7FAAAAAA</color>\n';
		this._Kml2DString +='   <outline>1</outline>\n';
		this._Kml2DString +='  </PolyStyle>\n';
		this._Kml2DString +=' </Style>\n';
		this._Kml2DString +=' <Style id=\"BlackPoly\">\n';
		this._Kml2DString +='  <LineStyle>\n';
		this._Kml2DString +='   <color>#ff000000</color>\n';
		this._Kml2DString +='   <width>5</width>\n';
		this._Kml2DString +='  </LineStyle>\n';
		this._Kml2DString +='  <PolyStyle> \n';
		this._Kml2DString +='   <color>7FAAAAAA</color>\n';
		this._Kml2DString +='   <outline>1</outline>\n';
		this._Kml2DString +='  </PolyStyle>\n';
		this._Kml2DString +=' </Style>\n';

		this._Kml2DString +='<Style id=\"PointCamera\">\n';
		this._Kml2DString +='<IconStyle> <Icon> <href>http://maps.google.com/mapfiles/kml/pal4/icon46.png</href> </Icon></IconStyle>\n';
		this._Kml2DString +='</Style>\n';

		this._Kml2DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml2DString +=' <gx:Tour>\n';
		this._Kml2DString +='  <name>Play me!</name>\n';
		this._Kml2DString +='  <gx:Playlist>\n';

		this._Kml2DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml2DString +='    <gx:AnimatedUpdate>\n';
		this._Kml2DString +='     <gx:duration>0.0</gx:duration>\n';
		this._Kml2DString +='     <Update>\n';
		this._Kml2DString +='      <targetHref/>\n';
		this._Kml2DString +='       <Change>\n';


		for (let k = 0; k < this._PosLon.length; k++)
		{
			this._Kml2DString +='        <Placemark targetId=\"2D_Image_' + String(k + 1) + '\">\n';
			this._Kml2DString +='         <visibility>0</visibility>\n';
			this._Kml2DString +='        </Placemark>\n';

			for (let j = 0; j < 4; j++)
			{
				this._Kml2DString +='        <Placemark targetId=\"2D_Image_' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml2DString +='         <visibility>0</visibility>\n';
				this._Kml2DString +='        </Placemark>\n';
			}
		}
		this._Kml2DString +='       </Change>\n';
		this._Kml2DString +='      </Update>\n';
		this._Kml2DString +='      </gx:AnimatedUpdate>\n';

		this._Kml2DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		
		for (let k = 0; k < this._PosLon.length; k++)
		{
			this._Kml2DString +='    <gx:FlyTo>\n';
			this._Kml2DString +='     <gx:duration>1.0</gx:duration>\n';
			this._Kml2DString +='     <gx:flyToMode>smooth</gx:flyToMode>\n';
			this._Kml2DString +='     <Camera>\n';
			this._Kml2DString +='      <gx:horizFov>"'+ String(this._Fov) +'</gx:horizFov>\n';									//FOV
			this._Kml2DString +='      <longitude>'+String(this._PosLon[k]) +'</longitude>\n';
			this._Kml2DString +='      <latitude>'+ String(this._PosLat[k]) +'</latitude>\n';
			this._Kml2DString +='      <altitude>'+ String(this._LaunchAlt + this._H + this._Add2GoogleH) + '</altitude>\n';
			this._Kml2DString +='      <heading>' + String(this._FlightDir * 180.0 / Math.PI) + '</heading>\n';
			this._Kml2DString +='      <tilt>0</tilt>\n';
			this._Kml2DString +='      <altitudeMode>absolute</altitudeMode>\n';
			this._Kml2DString +='     </Camera>\n';
			this._Kml2DString +='    </gx:FlyTo>\n';

			this._Kml2DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml2DString +='      <gx:AnimatedUpdate>\n';
			this._Kml2DString +='       <gx:duration>0.0</gx:duration>\n';
			this._Kml2DString +='       <Update>\n';
			this._Kml2DString +='        <targetHref/>\n';
			this._Kml2DString +='         <Change>\n';
			this._Kml2DString +='          <Placemark targetId=\"2D_Image_' + String(k + 1) + '\">\n';
			this._Kml2DString +='           <visibility>1</visibility>\n';
			this._Kml2DString +='          </Placemark>\n';

			for (let j = 0; j < 4; j++)
			{
				this._Kml2DString +='          <Placemark targetId=\"2D_Image_' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml2DString +='           <visibility>1</visibility>\n';
				this._Kml2DString +='          </Placemark>\n';
			}

			this._Kml2DString +='         </Change>\n';
			this._Kml2DString +='        </Update>\n';
			this._Kml2DString +='       </gx:AnimatedUpdate>\n';

			this._Kml2DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml2DString +='       <gx:SoundCue>\n';
			this._Kml2DString +='        <href>https://www.soundjay.com/mechanical/camera-shutter-click-01.mp3</href>\n';
			this._Kml2DString +='       </gx:SoundCue>\n';

			this._Kml2DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml2DString +='       <gx:Wait>\n';
			this._Kml2DString +='        <gx:duration>1.0</gx:duration>\n';
			this._Kml2DString +='       </gx:Wait>\n';

			this._Kml2DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml2DString +='       <gx:AnimatedUpdate>\n';
			this._Kml2DString +='        <gx:duration>0.0</gx:duration>\n';
			this._Kml2DString +='        <Update>\n';
			this._Kml2DString +='         <targetHref/>\n';
			this._Kml2DString +='          <Change>\n';
			this._Kml2DString +='           <Placemark targetId=\"2D_Image_' + String(k + 1) + '\">\n';
			this._Kml2DString +='            <visibility>0</visibility>\n';
			this._Kml2DString +='           </Placemark>\n';
			for (let j = 0; j < 4; j++)
			{
				this._Kml2DString +='           <Placemark targetId=\"2D_Image_' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml2DString +='            <visibility>0</visibility>\n';
				this._Kml2DString +='           </Placemark>\n';
			}
			this._Kml2DString +='          </Change>\n';
			this._Kml2DString +='        </Update>\n';
			this._Kml2DString +='       </gx:AnimatedUpdate>\n';
		}

		this._Kml2DString +='\n';


		
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml2DString +='       <gx:FlyTo>\n';
		this._Kml2DString +='        <gx:duration>1.0</gx:duration>\n';
		this._Kml2DString +='        <gx:flyToMode>smooth</gx:flyToMode>\n';
		this._Kml2DString +='        <Camera>\n';
		this._Kml2DString +='         <longitude>' + String(FinalLon * 180.0 / Math.PI) +'</longitude>\n';
		this._Kml2DString +='         <latitude>' + String(FinalLat * 180.0 / Math.PI) + '</latitude>\n';
		this._Kml2DString +='         <altitude>' + String(this._LaunchAlt + FinalH) + '</altitude>\n';
		this._Kml2DString +='         <heading>0</heading>\n';
		this._Kml2DString +='         <tilt>' + String(FinalTilt * 180.0 / Math.PI) + '</tilt>\n';
		this._Kml2DString +='         <altitudeMode>absolute</altitudeMode>\n';
		this._Kml2DString +='        </Camera>\n';
		this._Kml2DString +='       </gx:FlyTo>\n';

		this._Kml2DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml2DString +='       <gx:AnimatedUpdate>\n';
		this._Kml2DString +='        <gx:duration>0.0</gx:duration>\n';
		this._Kml2DString +='        <Update>\n';
		this._Kml2DString +='         <targetHref/>\n';
		this._Kml2DString +='          <Change>\n';
		for (let k = 0; k < this._PosLon.length; k++)
		{
			this._Kml2DString +='          <Placemark targetId=\"2D_Image_' + String(k + 1) + '\">\n';
			this._Kml2DString +='           <visibility>1</visibility>\n';
			this._Kml2DString +='          </Placemark>\n';

			for (let j = 0; j < 4; j++)
			{
				this._Kml2DString +='          <Placemark targetId=\"2D_Image_' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml2DString +='           <visibility>1</visibility>\n';
				this._Kml2DString +='          </Placemark>\n';
			}
		}

		this._Kml2DString +='          </Change>\n';
		this._Kml2DString +='        </Update>\n';
		this._Kml2DString +='       </gx:AnimatedUpdate>\n';

		this._Kml2DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml2DString +='  </gx:Playlist>\n';
		this._Kml2DString +=' </gx:Tour>\n';

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml2DString +=' <Folder>\n';
		this._Kml2DString +='  <name>ProjectArea_2D</name>\n';

		this._Kml2DString +='\n';


		for (let k = 0; k < this._BLon.length; k++)
		{
			this._Kml2DString +=' <Placemark id=\"2D_Project_'+ String(k + 1) +'\">\n';
			this._Kml2DString +='  <name>2D_Project_'+ String(k + 1) +'</name>\n';
			this._Kml2DString +='  <styleUrl>#BlackPoly</styleUrl>\n';
			this._Kml2DString +='  <Polygon>\n';
			this._Kml2DString +='   <extrude>1</extrude>\n';
			this._Kml2DString +='   <altitudeMode>relativeToGround</altitudeMode>\n';
			this._Kml2DString +='   <outerBoundaryIs>\n';
			this._Kml2DString +='    <LinearRing>\n';
			this._Kml2DString +='     <coordinates>\n';
			for (let j = 0; j < this._BLon[k].length; j++)
			{
				this._Kml2DString +='      ' + String(this._BLon[k][j])  + ',' + String(this._BLat[k][j])  + ','+ String(this._BuildingHt) +'\n';	//HC 25 to parameter
			}
			this._Kml2DString +='      ' + String(this._BLon[k][0])  + ',' + String(this._BLat[k][0])  + ','+ String(this._BuildingHt) +'\n';
			this._Kml2DString +='     </coordinates>\n';
			this._Kml2DString +='    </LinearRing>\n';
			this._Kml2DString +='   </outerBoundaryIs>\n';
			this._Kml2DString +='  </Polygon>\n';
			this._Kml2DString +=' </Placemark>\n';

			this._Kml2DString +='\n';
		}

		this._Kml2DString +=' </Folder>\n';

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml2DString +=' <Folder>\n';
		this._Kml2DString +='  <name>FieldOfViews_2D</name>\n';

		this._Kml2DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		for (let k = 0; k < this._PosLon.length; k++)
		{
			this._Kml2DString +='  <Placemark id=\"2D_WayPoint_' + String(k + 1) + '\">\n';
			//this._Kml2DString +='   <visibility>0</visibility>\n';
			this._Kml2DString +='   <name>2D_' + String(k + 1) + '</name>\n';
			//this._Kml2DString +='   <styleUrl>#RedPoly</styleUrl>\n';
			this._Kml2DString +='     <styleUrl> #PointCamera</styleUrl> \n';
			this._Kml2DString +='   <Point>\n';
			this._Kml2DString +='   <altitudeMode>absolute</altitudeMode>\n';
			this._Kml2DString +='    <coordinates>\n';
			this._Kml2DString +='     ' + String(this._PosLon[k]) + ',' + String(this._PosLat[k]) + ',' + String(this._LaunchAlt + this._H) +'\n';

			this._Kml2DString +='      </coordinates>\n';

			this._Kml2DString +='   </Point>\n';
			this._Kml2DString +='  </Placemark>\n';

			this._Kml2DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

		}

		this._Kml2DString +='  <Placemark id=\"2D_Path' + '\">\n';
		this._Kml2DString +='   <visibility>1</visibility>\n';
		this._Kml2DString +='   <name>2D_Path' + '</name>\n';
		this._Kml2DString +='   <styleUrl>#BlueLine</styleUrl>\n';
		this._Kml2DString +='   <LineString>\n';
		this._Kml2DString +='    <altitudeMode>absolute</altitudeMode>\n';
		this._Kml2DString +='     <coordinates>\n';
		for (let k = 0; k < this._PosLon.length; k++)
			this._Kml2DString +='      ' + String(this._PosLon[k])  + ',' + String(this._PosLat[k]) + ',' + String(this._LaunchAlt + this._H) + '\n';

		this._Kml2DString +='     </coordinates>\n';
		this._Kml2DString +='   </LineString>\n';
		this._Kml2DString +='  </Placemark>\n';

		this._Kml2DString +='\n';









		for (let k = 0; k < this._PosLon.length; k++)
		{
			for (let j = 0; j < 4; j++)
			{
				this._Kml2DString +='  <Placemark id=\"2D_Image_' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml2DString +='   <name>2D_Image_' + String(k + 1) + 'b' + String(j + 1) + '</name>\n';
				this._Kml2DString +='   <styleUrl>#RedLine</styleUrl>\n';
				this._Kml2DString +='   <LineString>\n';
				this._Kml2DString +='    <altitudeMode>absolute</altitudeMode>\n';
				this._Kml2DString +='     <coordinates>\n';
				this._Kml2DString +='      ' + String(this._PosLon[k])  + ',' + String(this._PosLat[k])  + ',' + String(this._LaunchAlt + this._H) +'\n';
				this._Kml2DString +='      ' + String(this._FootPrintLon[k][j])  + ',' + String(this._FootPrintLat[k][j]) + ',' + String(this._LaunchAlt) + '\n';
				this._Kml2DString +='     </coordinates>\n';
				this._Kml2DString +='   </LineString>\n';
				this._Kml2DString +='  </Placemark>\n';

				this._Kml2DString +='\n';
				////////////////////////////////////////////////////////////////////////////////////////////////////////////

			}

		}

		this._Kml2DString +=' </Folder>\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		this._Kml2DString +=' <Folder>\n';
		this._Kml2DString +='  <name>FootPrints_2D</name>\n';

		this._Kml2DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		for (let k = 0; k < this._PosLon.length; k++)
		{
			this._Kml2DString +='  <Placemark id=\"2D_Image_' + String(k + 1) + '\">\n';
			this._Kml2DString +='   <name>2D_Image_' + String(k + 1) + '</name>\n';
			this._Kml2DString +='   <styleUrl>#RedPoly</styleUrl>\n';
			this._Kml2DString +='   <Polygon>\n';
			this._Kml2DString +='    <extrude>1</extrude>\n';
			this._Kml2DString +='    <altitudeMode>relativeToGround</altitudeMode>\n';
			this._Kml2DString +='    <outerBoundaryIs>\n';
			this._Kml2DString +='     <LinearRing>\n';
			this._Kml2DString +='      <coordinates>\n';
			for (let j = 0; j < this._FootPrintLon[k].sizelength; j++)
				this._Kml2DString +='       ' + String(this._FootPrintLon[k][j])  + ',' + String(this._FootPrintLat[k][j])  + ',1\n';

			this._Kml2DString +='      </coordinates>\n';
			this._Kml2DString +='     </LinearRing>\n';
			this._Kml2DString +='    </outerBoundaryIs>\n';
			this._Kml2DString +='   </Polygon>\n';
			this._Kml2DString +='  </Placemark>\n';

			this._Kml2DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

		}

		this._Kml2DString +=' </Folder>\n';

		this._Kml2DString +=' </Document>\n';
		this._Kml2DString +='</kml>\n';

		

		



		
	}

	Create2DCsv()
	{
		this._Csv2DString='';

		let E, N;
		let Lon, Lat;
		let dummy;
		

		

		this._Csv2DString +='latitude,longitude,altitude(m),heading(deg),curvesize(m),rotationdir,gimbalmode,gimbalpitchangle,actiontype1,actionparam1,actiontype2,actionparam2,actiontype3,actionparam3,actiontype4,actionparam4,actiontype5,actionparam5,actiontype6,actionparam6,actiontype7,actionparam7,actiontype8,actionparam8,actiontype9,actionparam9,actiontype10,actionparam10,actiontype11,actionparam11,actiontype12,actionparam12,actiontype13,actionparam13,actiontype14,actionparam14,actiontype15,actionparam15,altitudemode,speed(m/s),poi_latitude,poi_longitude,poi_altitude(m),poi_altitudemode,photo_timeinterval,photo_distinterval\n';
		
		this._Csv2DString += String(this._LaunchLat * 180.0 / Math.PI) + ','+ String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';


		for (let k = 0; k < this._PosLon.length; k++)
		{


		
			this._Csv2DString += String(this._PosLat[k]) + ',' + String(this._PosLon[k]) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';
		}
		this._Csv2DString += String(this._LaunchLat * 180.0 / Math.PI) + ',' + String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

		

	}

	Create2DCsv_video()
	{
		this._Csv2DVideoString = '';

		let E, N;
		let Lon, Lat;
		let dummy;
		
		

		this._Csv2DVideoString += 'latitude,longitude,altitude(m),heading(deg),curvesize(m),rotationdir,gimbalmode,gimbalpitchangle,actiontype1,actionparam1,actiontype2,actionparam2,actiontype3,actionparam3,actiontype4,actionparam4,actiontype5,actionparam5,actiontype6,actionparam6,actiontype7,actionparam7,actiontype8,actionparam8,actiontype9,actionparam9,actiontype10,actionparam10,actiontype11,actionparam11,actiontype12,actionparam12,actiontype13,actionparam13,actiontype14,actionparam14,actiontype15,actionparam15,altitudemode,speed(m/s),poi_latitude,poi_longitude,poi_altitude(m),poi_altitudemode,photo_timeinterval,photo_distinterval\n';
		this._Csv2DVideoString += String(this._LaunchLat * 180.0 / Math.PI) + ',' + String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';


		for (let k = 0; k < this._PosLon.length; k++)
		{
			if (k == 0)
			{
				this._Csv2DVideoString += this._PosLat[k] + ',' + String(this._PosLon[k]) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,2,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

			}
			else if (k == this._PosLon.length - 1)
			{
				this._Csv2DVideoString += String(this._PosLat[k]) + ',' + String(this._PosLon[k]) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,3,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

			}
			else
			{
				this._Csv2DVideoString += String(this._PosLat[k]) + ',' + String(this._PosLon[k]) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';
			}
		}
		this._Csv2DVideoString += String(this._LaunchLat * 180.0 / Math.PI) + ',' + String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) + ',' + String(this._FlightDir * 180.0 / Math.PI) + ',' + '0.20000000298023224,0,2,-90,0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

		
	}



	Get2DKml()
	{
		//fs.writeFileSync(FilePath, this._Kml2DString);

		return this._Kml2DString;

	}

	Get2DCsv()
	{
		//fs.writeFileSync(FilePath, this._Csv2DString);

		return this._Csv2DString;
	}

	Get2DCsv_video()
	{
		//fs.writeFileSync(FilePath, this._Csv2DVideoString);

		return this._Csv2DVideoString;
	}
	

	GetMetricBounds_3D()
	{
		let Lonk, Latk, Altk;

		let E, N, U;

		


		Altk = this._LaunchAlt;				//approx

		

		for (let k = 0; k < this._PathLon.length; k++)
		{
			let vE=[];
			let vN=[];

			for (let j = 0; j < this._PathLon[k].length; j++)
			{
				Lonk = this._PathLon[k][j] * Math.PI / 180.0;
				Latk = this._PathLat[k][j] * Math.PI / 180.0;


				[E, N, U]=this._Cst.Geog2Topo(Lonk, Latk, Altk);

				vE.push(E);
				vN.push(N);
			}
			this._PathE.push(vE);
			this._PathN.push(vN);

		}
	}

	Plan_3D()
	{
		
		let MinWaySpace;
		
		let NSpacings;
		let SpacingX;

		let Ei, Ni, Headi,Tilti;
		let Alternate;

		let dummy;

		//////////////////////////////////////////////////////////////////////////////////////////////////////////
		MinWaySpace = 0.65;																											//HC
		/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		
		////////
		this._Poly2Waypoints.Set(this._PathE, this._PathN, this._SpacingAng, MinWaySpace, this._SpacingX);
		this._Poly2Waypoints.RunAll();
		[this._PosE2, this._PosN2, this._PosHead2]=this._Poly2Waypoints.Get();
		////////


		NSpacings = Math.round((this._MaxTilt - this._MinTilt + this._StepTilt / 2.0) / this._StepTilt);  // for rounding

		if (NSpacings == 0)
		{
			SpacingX = 0;
		}

		else
		{
			if (NSpacings > 4)						// 4 hard coded, to have max of 5 photos
				NSpacings = 4;

			SpacingX = (this._MaxTilt - this._MinTilt) / NSpacings;
		}


		
		for (let j = 0; j < NSpacings + 1; j++)						// +1
		{
			this._Tilt.push(this._MinTilt + j * SpacingX);
		}


		Alternate = 1;

		for (let j = 0; j < this._PosE2.length; j++)
		{
			Ei = this._PosE2[j];
			Ni = this._PosN2[j];
			Headi = this._PosHead2[j];
			for (let kk = 0; kk < this._Tilt.length; kk++)
			{
				this._PosE3.push(Ei);
				this._PosN3.push(Ni);
				this._PosHead3.push(Headi);

				if (Alternate==1)
				{
					Tilti = this._Tilt[kk];
				}
				else
				{
					Tilti = this._Tilt[this._Tilt.length- 1 - kk];
				}
				this._PosTilt3.push(Tilti);


			}
			Alternate = (Alternate==1)? 0:1;

		}
		

		if (this._ReverseDirection == 1)
		{
			//std::vector <double> _WayE, _WayN, _WayLon, _WayLat, _WayHead, _WayTilt;

			let N;

			N = this._PosE3.size();
			for (let k = 0; k < Math.floor(N / 2); k++)				// /2
			{
				dummy = this._PosE3[k];
				this._PosE3[k] = this._PosE3[N - 1 - k];
				this._PosE3[N - 1 - k] = dummy;

				dummy = this._PosN3[k];
				this._PosN3[k] = this._PosN3[N - 1 - k];
				this._PosN3[N - 1 - k] = dummy;

				dummy = this._PosHead3[k];
				this._PosHead3[k] = this._PosHead3[N - 1 - k];
				this._PosHead3[N - 1 - k] = dummy;

				//dummy = _PosTilt3[k];
				//_PosTilt3[k] = _PosTilt3[N - 1 - k];
				//_PosTilt3[N - 1 - k] = dummy;
			}
			

			N = this._PosE2.size();
			for (let k = 0; k < Math.floor(N / 2); k++)				// /2
			{
				dummy = this._PosE2[k];
				this._PosE2[k] = this._PosE2[N - 1 - k];
				this._PosE2[N - 1 - k] = dummy;

				dummy = this._PosN2[k];
				this._PosN2[k] = this._PosN2[N - 1 - k];
				this._PosN2[N - 1 - k] = dummy;

				dummy = this._PosHead2[k];
				this._PosHead2[k] = this._PosHead2[N - 1 - k];
				this._PosHead2[N - 1 - k] = dummy;

				// Tilt3 is 0
			}
		}
			
	}

	GetFootPrint_3D()
	{
		let E0, N0;

		let Head0;
		let Tilt0;
		let U0;

		let R = new Matrix3();
		let RZ = new Matrix3();
		let RX = new Matrix3();

		let v = new Matrix3();
		let V = new Matrix3();
		
		
		R.construct(3);
		RZ.construct(3);
		RX.construct(3);

		v.construct(1);
		V.construct(1);

		let gAlong, gAcross;
		let x, y;
		//std::vector <double> vx, vy;

		let Count;

		let V0, V1, V2;
		let E, N;

		let U;

		let  Alt;

		let Dist;

		//std::vector <double> FootPrintE, FootPrintN, FootPrintAlt;
		



		gAlong = this._NAlong * this._PixSize;
		gAcross = this._NAcros * this._PixSize;





		Count = 0;
		this._Ind=new Array(4).fill(0);

		this._Ind[0] = Count;
		y = -gAlong / 2;

		let vx=[];
		let vy=[];
		for (x = -gAcross / 2.0; x <= gAcross / 2.0; x += gAcross / this._NFootPrint)
		{
			vx.push(x);
			vy.push(y);

			Count++;
		}

		this._Ind[1] = Count;
		x = gAcross / 2.0;
		for (y = -gAlong / 2.0; y <= gAlong / 2.0; y += gAlong / this._NFootPrint)
		{
			vx.push(x);
			vy.push(y);

			Count++;

		}

		this._Ind[2] = Count;

		y = gAlong / 2.0;
		for (x = gAcross / 2.0; x >= -gAcross / 2.0; x -= gAcross / this._NFootPrint)
		{
			vx.push(x);
			vy.push(y);

			Count++;
		}

		this._Ind[3] = Count;

		x = -gAcross / 2.0;
		for (y = gAlong / 2.0; y >= -gAlong / 2.0; y -= gAlong / this._NFootPrint)
		{
			vx.push(x);
			vy.push(y);

			Count++;
		}

		x = -gAcross / 2.0;				//just in case. You may want to resolve if the last point is repeated
		y = -gAlong / 2.0;
		vx.push(x);
		vy.push(y);

		vx.push(0);				//Center, not part of the footprint
		vy.push(0);


		for (let k = 0; k < this._PosE3.length; k++)
		{
			let FootPrintE=[];
			let FootPrintN=[];
			let FootPrintAlt=[];

			//FootPrintLon.clear();
			//FootPrintLat.clear();

			E0 = this._PosE3[k];
			N0 = this._PosN3[k];
			//Lon0 = _WayLon[k];
			//Lat0 = _WayLat[k];
			Head0 = this._PosHead3[k];

			Tilt0 = this._PosTilt3[k];

			U0 = this._H;



			RZ.SetRotZ(Head0);
			RX.SetRotX(-Tilt0);
			R = RZ.MMultiply(RX);

			//RZ.SetRotZ(-Head0);
			//RX.SetRotX(Tilt0);
			//RT = (RX * RZ);

			for (let i = 0; i < vx.length; i++)
			{
				x = vx[i];
				y = vy[i];

				v.Set1(x, y, -this._F);
				V = R.MMultiply(v);

				[V0, V1, V2]=V.Get();

				if (V2 > 0)            // Looking up
				{


					Dist = Math.sqrt(V0 * V0 + V1 * V1 + V2 * V2);

					V0 *= (this._MaxFootPrintLen / Dist);
					V1 *= (this._MaxFootPrintLen / Dist);
					V2 *= (this._MaxFootPrintLen / Dist);

					E = E0 + V0;
					N = N0 + V1;
					U = U0 + V2;

					//_Cst.Topo2Geog(E, N, U, Lon, Lat, Alt);


				}
				else            // Looking down
				{
					U = 0;				//start. will iterate. NO iteration for NoDEM

					

					// E-E0   V0
					// N-N0   V1
					// U-U0   V2;

					E = E0 + V0 * (U - U0) / V2;
					N = N0 + V1 * (U - U0) / V2;

					Dist = Math.sqrt((E - E0) * (E - E0) + (N - N0) * (N - N0));

					if (Dist > this._MaxFootPrintLen)
					{
						E = E0 + (E - E0) / Dist * this._MaxFootPrintLen;
						N = N0 + (N - N0) / Dist * this._MaxFootPrintLen;
					}


					//_Cst.Topo2Geog(E, N, U, Lon, Lat, Alt);

					

						


						
					
				}

				Alt = U+this._LaunchAlt;			//check later


				if (i < vx.length - 1)
				{


					FootPrintE.push(E);
					FootPrintN.push(N);
					FootPrintAlt.push(Alt);

					
				}
				else
				{
					

					let dE, dN, dU, dDist;
					dE = E0 - E;
					dN = N0 - N;
					dU = U0 - U;

					let Eb, Nb, Ub;
					//double Lonb, Latb;
					let Altb;

					dDist = Math.sqrt(dE * dE + dN * dN + dU * dU);

					dE *= (this._Add2GoogleH / dDist);
					dN *= (this._Add2GoogleH / dDist);
					dU *= (this._Add2GoogleH / dDist);

					Eb = E0 + dE;
					Nb = N0 + dN;
					Ub = U0 + dU;

					

					this._PosBackE3.push(Eb);
					this._PosBackN3.push(Nb);
					this._PosBackAlt3.push(Ub+this._LaunchAlt);				// +_LaunchAlt
					


				}

			}
			this._FootPrintE3.push(FootPrintE);
			this._FootPrintN3.push(FootPrintN);
			this._FootPrintAlt3.push(FootPrintAlt);

		}

	}

	GetNadirFootPrint_3D()
	{
		let gAlong, gAcross;

		let E0, N0;
		
		let Head0;
		let Tilt0;
		let U0;

		let R = new Matrix3();
		let RZ = new Matrix3();
		let RX = new Matrix3();

		let v = new Matrix3();
		let V = new Matrix3();

		R.construct(3);
		RZ.construct(3);
		RX.construct(3);

		v.construct(1);
		V.construct(1);
		
		let V0, V1, V2;

		let E, N;

		let U;

		
		let x, y;

		


		gAlong = this._NAlong * this._PixSize;
		gAcross = this._NAcros * this._PixSize;

		let vx=[];
		let vy=[];

		vx.push(-gAcross / 2.0);
		vy.push(-gAlong / 2.0);

		vx.push(gAcross / 2.0);
		vy.push(-gAlong / 2.0);

		vx.push(gAcross / 2.0);
		vy.push(gAlong / 2.0);

		vx.push(-gAcross / 2.0);
		vy.push(gAlong / 2.0);

		for (let k = 0; k < this._PosE2.length; k++)
		{
			let FootPrintE=[];
			let FootPrintN=[];
			let FootPrintAlt=[];

			E0 = this._PosE2[k];
			N0 = this._PosN2[k];
			
			Head0 = this._PosHead2[k];

			Tilt0 = 0;

			U0 = this._H;

			RZ.SetRotZ(Head0);
			RX.SetRotX(-Tilt0);
			R = RZ.MMultiply(RX);

			for (let i = 0; i < vx.length; i++)
			{
				x = vx[i];
				y = vy[i];

				v.Set1(x, y, -this._F);
				V = R.MMultiply(v);

				[V0, V1, V2]=V.Get();

				U = 0;				//start. will iterate. NO iteration for NoDEM



				// E-E0   V0
				// N-N0   V1
				// U-U0   V2;

				E = E0 + V0 * (U - U0) / V2;
				N = N0 + V1 * (U - U0) / V2;

				FootPrintE.push(E);
				FootPrintN.push(N);
			}

			this._FootPrintE2.push(FootPrintE);
			this._FootPrintN2.push(FootPrintN);
		}
	}

	Create3DKml()
	{
		this._Kml3DString = '';

		

		let FinalTilt;
		let FinalH;
		let Shift;
		let FinalLon, FinalLat;
		let E, N, Lon, Lat;
		let dummy;

		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		FinalTilt = 30.0;											//HC
		FinalH = this._H + this._Add2GoogleH * 2;							//2
		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		FinalTilt *= Math.PI / 180.0;

		Shift = FinalH * Math.tan(FinalTilt);

		[FinalLon, FinalLat, dummy]=this._Cst.Topo2Geog(0, -Shift, 0) ;


		this._Kml3DString +='<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n';
		this._Kml3DString +='<kml xmlns=\"http://www.opengis.net/kml/2.2\"\n';
		this._Kml3DString +='xmlns:gx=\"http://www.google.com/kml/ext/2.2\">\n';
		this._Kml3DString +='<Document>\n';

		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml3DString +=' <Style id=\"RedLine\"> \n';
		this._Kml3DString +='  <LineStyle>  \n';
		this._Kml3DString +='   <color>#ff0000ff</color>\n';
		this._Kml3DString +='   <width>5</width>\n';
		this._Kml3DString +='  </LineStyle> \n';
		this._Kml3DString +=' </Style>\n';
		this._Kml3DString +=' <Style id=\"BlueLine\"> \n';
		this._Kml3DString +='  <LineStyle>  \n';
		this._Kml3DString +='   <color>#ffff0000</color>\n';
		this._Kml3DString +='   <width>5</width>\n';
		this._Kml3DString +='  </LineStyle> \n';
		this._Kml3DString +=' </Style>\n';
		this._Kml3DString +=' <Style id=\"RedPoly\">\n';
		this._Kml3DString +='  <LineStyle>\n';
		this._Kml3DString +='   <color>#ff0000ff</color>\n';
		this._Kml3DString +='   <width>5</width>\n';
		this._Kml3DString +='  </LineStyle>\n';
		this._Kml3DString +='  <PolyStyle> \n';
		this._Kml3DString +='   <color>7FAAAAAA</color>\n';
		this._Kml3DString +='   <outline>1</outline>\n';
		this._Kml3DString +='  </PolyStyle>\n';
		this._Kml3DString +=' </Style>\n';
		this._Kml3DString +=' <Style id=\"BlackPoly\">\n';
		this._Kml3DString +='  <LineStyle>\n';
		this._Kml3DString +='   <color>#ff000000</color>\n';
		this._Kml3DString +='   <width>5</width>\n';
		this._Kml3DString +='  </LineStyle>\n';
		this._Kml3DString +='  <PolyStyle> \n';
		this._Kml3DString +='   <color>7FAAAAAA</color>\n';
		this._Kml3DString +='   <outline>1</outline>\n';
		this._Kml3DString +='  </PolyStyle>\n';
		this._Kml3DString +=' </Style>\n';

		this._Kml3DString +='<Style id=\"PointCamera\">\n';
		this._Kml3DString +='<IconStyle> <Icon> <href>http://maps.google.com/mapfiles/kml/pal4/icon46.png</href> </Icon></IconStyle>\n';
		this._Kml3DString +='</Style>\n';


		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml3DString +=' <gx:Tour>\n';
		this._Kml3DString +='  <name>Play me!</name>\n';
		this._Kml3DString +='  <gx:Playlist>\n';

		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml3DString +='    <gx:AnimatedUpdate>\n';
		this._Kml3DString +='     <gx:duration>0.0</gx:duration>\n';
		this._Kml3DString +='     <Update>\n';
		this._Kml3DString +='      <targetHref/>\n';
		this._Kml3DString +='       <Change>\n';
		for (let k = 0; k < this._PosLon3.length; k++)
		{
			this._Kml3DString +='        <Placemark targetId=\"3D_Image' + String(k + 1) + '\">\n';
			this._Kml3DString +='         <visibility>0</visibility>\n';
			this._Kml3DString +='        </Placemark>\n';

			for (let j = 0; j < 5; j++)																			// the 5th is the border
			{
				this._Kml3DString +='        <Placemark targetId=\"3D_Image' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml3DString +='         <visibility>0</visibility>\n';
				this._Kml3DString +='        </Placemark>\n';
			}
		}
		this._Kml3DString +='       </Change>\n';
		this._Kml3DString +='      </Update>\n';
		this._Kml3DString +='      </gx:AnimatedUpdate>\n';

		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		for (let k = 0; k < this._PosLon3.length; k++)
		{
			this._Kml3DString +='    <gx:FlyTo>\n';
			this._Kml3DString +='     <gx:duration>1.0</gx:duration>\n';
			this._Kml3DString +='     <gx:flyToMode>smooth</gx:flyToMode>\n';
			this._Kml3DString +='     <Camera>\n';
			this._Kml3DString +='      <gx:horizFov>' + String(this._Fov) + '</gx:horizFov>\n';									//FOV
			this._Kml3DString +='      <longitude>' + String(this._PosBackLon3[k]) + '</longitude>\n';
			this._Kml3DString +='      <latitude>' + String(this._PosBackLat3[k]) + '</latitude>\n';
			this._Kml3DString +='      <altitude>' + String(this._PosBackAlt3[k]) + '</altitude>\n';
			this._Kml3DString +='      <heading>' + String(this._PosHead3[k]) + '</heading>\n';
			this._Kml3DString +='      <tilt>' + String(this._PosTilt3[k]) + '</tilt>\n';
			this._Kml3DString +='      <altitudeMode>absolute</altitudeMode>\n';
			this._Kml3DString +='     </Camera>\n';
			this._Kml3DString +='    </gx:FlyTo>\n';

			this._Kml3DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml3DString +='      <gx:AnimatedUpdate>\n';
			this._Kml3DString +='       <gx:duration>0.0</gx:duration>\n';
			this._Kml3DString +='       <Update>\n';
			this._Kml3DString +='        <targetHref/>\n';
			this._Kml3DString +='         <Change>\n';
			this._Kml3DString +='          <Placemark targetId=\"3D_Image' + String(k + 1) + '\">\n';
			this._Kml3DString +='           <visibility>1</visibility>\n';
			this._Kml3DString +='          </Placemark>\n';

			for (let j = 0; j < 5; j++)
			{
				this._Kml3DString +='          <Placemark targetId=\"3D_Image' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml3DString +='           <visibility>1</visibility>\n';
				this._Kml3DString +='          </Placemark>\n';
			}

			this._Kml3DString +='         </Change>\n';
			this._Kml3DString +='        </Update>\n';
			this._Kml3DString +='       </gx:AnimatedUpdate>\n';

			this._Kml3DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml3DString +='       <gx:SoundCue>\n';
			this._Kml3DString +='        <href>https://www.soundjay.com/mechanical/camera-shutter-click-01.mp3</href>\n';
			this._Kml3DString +='       </gx:SoundCue>\n';

			this._Kml3DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml3DString +='       <gx:Wait>\n';
			this._Kml3DString +='        <gx:duration>1.0</gx:duration>\n';
			this._Kml3DString +='       </gx:Wait>\n';

			this._Kml3DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

			this._Kml3DString +='       <gx:AnimatedUpdate>\n';
			this._Kml3DString +='        <gx:duration>0.0</gx:duration>\n';
			this._Kml3DString +='        <Update>\n';
			this._Kml3DString +='         <targetHref/>\n';
			this._Kml3DString +='          <Change>\n';
			this._Kml3DString +='           <Placemark targetId=\"3D_Image' + String(k + 1) + '\">\n';
			this._Kml3DString +='            <visibility>0</visibility>\n';
			this._Kml3DString +='           </Placemark>\n';
			for (let j = 0; j < 5; j++)
			{
				this._Kml3DString +='           <Placemark targetId=\"3D_Image' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml3DString +='            <visibility>0</visibility>\n';
				this._Kml3DString +='           </Placemark>\n';
			}
			this._Kml3DString +='          </Change>\n';
			this._Kml3DString +='        </Update>\n';
			this._Kml3DString +='       </gx:AnimatedUpdate>\n';
		}

		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml3DString +='       <gx:FlyTo>\n';
		this._Kml3DString +='        <gx:duration>1.0</gx:duration>\n';
		this._Kml3DString +='        <gx:flyToMode>smooth</gx:flyToMode>\n';
		this._Kml3DString +='        <Camera>\n';
		this._Kml3DString +='         <longitude>' + String(FinalLon * 180.0 / Math.PI) + '</longitude>\n';
		this._Kml3DString +='         <latitude>' + String(FinalLat * 180.0 / Math.PI) + '</latitude>\n';
		this._Kml3DString +='         <altitude>' + String(this._LaunchAlt + FinalH) + '</altitude>\n';
		this._Kml3DString +='         <heading>0</heading>\n';
		this._Kml3DString +='         <tilt>' + String(FinalTilt * 180.0 / Math.PI) + '</tilt>\n';
		this._Kml3DString +='         <altitudeMode>absolute</altitudeMode>\n';
		this._Kml3DString +='        </Camera>\n';
		this._Kml3DString +='       </gx:FlyTo>\n';

		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml3DString +='  </gx:Playlist>\n';
		this._Kml3DString +=' </gx:Tour>\n';

		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml3DString +=' <Folder>\n';
		this._Kml3DString +='  <name>ProjectArea_3D</name>\n';

		this._Kml3DString +='\n';


		for (let k = 0; k < this._BLon.length; k++)
		{
			this._Kml3DString +=' <Placemark id=\"3D_Project_' + String(k + 1) + '\">\n';
			this._Kml3DString +='  <name>3D_Project_' + String(k + 1) + '</name>\n';
			this._Kml3DString +='  <styleUrl>#BlackPoly</styleUrl>\n';
			this._Kml3DString +='  <Polygon>\n';
			this._Kml3DString +='   <extrude>1</extrude>\n';
			this._Kml3DString +='   <altitudeMode>relativeToGround</altitudeMode>\n';
			this._Kml3DString +='   <outerBoundaryIs>\n';
			this._Kml3DString +='    <LinearRing>\n';
			this._Kml3DString +='     <coordinates>\n';
			for (let j = 0; j < this._BLon[k].length; j++)
			{
				this._Kml3DString +='      ' + String(this._BLon[k][j]) + ',' + String(this._BLat[k][j]) + ',' + String(this._BuildingHt) +'\n';			//HC 25 to parameter
			}
			this._Kml3DString +='      ' + String(this._BLon[k][0]) + ',' + String(this._BLat[k][0]) + ',' + String(this._BuildingHt) +'\n';
			this._Kml3DString +='     </coordinates>\n';
			this._Kml3DString +='    </LinearRing>\n';
			this._Kml3DString +='   </outerBoundaryIs>\n';
			this._Kml3DString +='  </Polygon>\n';
			this._Kml3DString +=' </Placemark>\n';

			this._Kml3DString +='\n';
		}

		this._Kml3DString +=' </Folder>\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		this._Kml3DString +=' <Folder>\n';
		this._Kml3DString +='  <name>FieldOfViews_3D</name>\n';

		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		for (let k = 0; k < this._PosLon3.length; k++)
		{
			this._Kml3DString +='  <Placemark id=\"3D_WayPoint' + String(k + 1) + '\">\n';
			//this._Kml3DString +='   <visibility>0</visibility>\n';
			this._Kml3DString +='   <name>3D_' + String(k + 1) + '</name>\n';
			//this._Kml3DString +='   <styleUrl>#RedPoly</styleUrl>\n';
			this._Kml3DString +='     <styleUrl> #PointCamera</styleUrl> \n';
			this._Kml3DString +='   <Point>\n';
			this._Kml3DString +='   <altitudeMode>absolute</altitudeMode>\n';
			this._Kml3DString +='    <coordinates>\n';
			this._Kml3DString +='     ' + String(this._PosLon3[k]) + ',' + String(this._PosLat3[k]) + ',' + String(this._LaunchAlt + this._H) +'\n';

			this._Kml3DString +='      </coordinates>\n';

			this._Kml3DString +='   </Point>\n';
			this._Kml3DString +='  </Placemark>\n';

			this._Kml3DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

		}

		this._Kml3DString +='  <Placemark id=\"3D_Path' + '\">\n';
		this._Kml3DString +='   <visibility>1</visibility>\n';
		this._Kml3DString +='   <name>3D_Path' + '</name>\n';
		this._Kml3DString +='   <styleUrl>#BlueLine</styleUrl>\n';
		this._Kml3DString +='   <LineString>\n';
		this._Kml3DString +='    <altitudeMode>absolute</altitudeMode>\n';
		this._Kml3DString +='     <coordinates>\n';
		for (let k = 0; k < this._PosLon3.length; k++)
			this._Kml3DString +='      ' + String(this._PosLon3[k]) + ',' + String(this._PosLat3[k]) + ',' + String(this._LaunchAlt + this._H) +'\n';

		this._Kml3DString +='     </coordinates>\n';
		this._Kml3DString +='   </LineString>\n';
		this._Kml3DString +='  </Placemark>\n';

		this._Kml3DString +='\n';


		for (let k = 0; k < this._PosLon3.length; k++)
		{
			for (let j = 0; j < 4; j++)
			{
				this._Kml3DString +='  <Placemark id=\"3D_Image' + String(k + 1) + 'b' + String(j + 1) + '\">\n';
				this._Kml3DString +='   <visibility>0</visibility>\n';
				this._Kml3DString +='   <name>3D_Image' + String(k + 1) + 'b' + String(j + 1) + '</name>\n';
				this._Kml3DString +='   <styleUrl>#RedLine</styleUrl>\n';
				this._Kml3DString +='   <LineString>\n';
				this._Kml3DString +='    <altitudeMode>absolute</altitudeMode>\n';
				this._Kml3DString +='     <coordinates>\n';
				this._Kml3DString +='      ' + String(this._PosLon3[k])  + ',' + String(this._PosLat3[k])  + ',' + String(this._LaunchAlt + this._H) +'\n';
				this._Kml3DString +='      ' + String(this._FootPrintLon3[k][this._Ind[j]]) + ',' + String(this._FootPrintLat3[k][this._Ind[j]]) + ',' + String(this._FootPrintAlt3[k][this._Ind[j]]) +'\n';
				this._Kml3DString +='     </coordinates>\n';
				this._Kml3DString +='   </LineString>\n';
				this._Kml3DString +='  </Placemark>\n';

				this._Kml3DString +='\n';
				////////////////////////////////////////////////////////////////////////////////////////////////////////////

			}

			this._Kml3DString +='  <Placemark id=\"3D_Image' + String(k + 1) + 'b5' + '\">\n';
			this._Kml3DString +='   <visibility>0</visibility>\n';
			this._Kml3DString +='   <name>3D_Image' + String(k + 1) + 'b5' + '</name>\n';
			this._Kml3DString +='   <styleUrl>#RedLine</styleUrl>\n';
			this._Kml3DString +='   <LineString>\n';
			this._Kml3DString +='    <altitudeMode>absolute</altitudeMode>\n';
			this._Kml3DString +='     <coordinates>\n';

			this._Kml3DString +='      ' + String(this._FootPrintLon3[k][this._Ind[0]])  + ',' + String(this._FootPrintLat3[k][this._Ind[0]])  + ',' + String(this._FootPrintAlt3[k][this._Ind[0]]) +'\n';
			this._Kml3DString +='      ' + String(this._FootPrintLon3[k][this._Ind[1]])  + ',' + String(this._FootPrintLat3[k][this._Ind[1]])  + ',' + String(this._FootPrintAlt3[k][this._Ind[1]]) +'\n';
			this._Kml3DString +='      ' + String(this._FootPrintLon3[k][this._Ind[2]])  + ',' + String(this._FootPrintLat3[k][this._Ind[2]])  + ',' + String(this._FootPrintAlt3[k][this._Ind[2]]) +'\n';
			this._Kml3DString +='      ' + String(this._FootPrintLon3[k][this._Ind[3]])  + ',' + String(this._FootPrintLat3[k][this._Ind[3]])  + ',' + String(this._FootPrintAlt3[k][this._Ind[3]]) +'\n';
			this._Kml3DString +='      ' + String(this._FootPrintLon3[k][this._Ind[0]])  + ',' + String(this._FootPrintLat3[k][this._Ind[0]])  + ',' + String(this._FootPrintAlt3[k][this._Ind[0]]) +'\n';
			this._Kml3DString +='     </coordinates>\n';
			this._Kml3DString +='   </LineString>\n';
			this._Kml3DString +='  </Placemark>\n';

			this._Kml3DString +='\n';

		}

		this._Kml3DString +=' </Folder>\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////
		this._Kml3DString +=' <Folder>\n';
		this._Kml3DString +='  <name>FootPrints_3D</name>\n';

		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////

		for (let k = 0; k < this._PosLon3.length; k++)
		{
			this._Kml3DString +='  <Placemark id=\"3D_Image' + String(k + 1) + '\">\n';
			//this._Kml3DString +='   <visibility>0</visibility>\n';
			this._Kml3DString +='   <name>3D_Image' + String(k + 1) + '</name>\n';
			this._Kml3DString +='   <styleUrl>#RedPoly</styleUrl>\n';
			this._Kml3DString +='   <Polygon>\n';
			this._Kml3DString +='    <extrude>1</extrude>\n';
			this._Kml3DString +='    <altitudeMode>relativeToGround</altitudeMode>\n';
			this._Kml3DString +='    <outerBoundaryIs>\n';
			this._Kml3DString +='     <LinearRing>\n';
			this._Kml3DString +='      <coordinates>\n';
			for (let j = 0; j < this._FootPrintLon3[k].length; j++)
				this._Kml3DString +='       ' + String(this._FootPrintLon3[k][j]) + ',' + String(this._FootPrintLat3[k][j]) + ',1\n';

			this._Kml3DString +='      </coordinates>\n';
			this._Kml3DString +='     </LinearRing>\n';
			this._Kml3DString +='    </outerBoundaryIs>\n';
			this._Kml3DString +='   </Polygon>\n';
			this._Kml3DString +='  </Placemark>\n';

			this._Kml3DString +='\n';
			////////////////////////////////////////////////////////////////////////////////////////////////////////////

		}

		this._Kml3DString +=' </Folder>\n';





		this._Kml3DString +='\n';
		////////////////////////////////////////////////////////////////////////////////////////////////////////////






		this._Kml3DString +=' </Document>\n';
		this._Kml3DString +='</kml>\n';

		
	}
	Get3DKml()
	{
		//fs.writeFileSync(FilePath, this._Kml3DString);

		return this._Kml3DString;
	}

	Create3DCsv()
	{
		this._Csv3DString='';
		//this._Csv3DString +='\n';

		let Lon, Lat,Head,Tilt;
		
		let Alternate;

		this._Csv3DString +='latitude,longitude,altitude(m),heading(deg),curvesize(m),rotationdir,gimbalmode,gimbalpitchangle,actiontype1,actionparam1,actiontype2,actionparam2,actiontype3,actionparam3,actiontype4,actionparam4,actiontype5,actionparam5,actiontype6,actionparam6,actiontype7,actionparam7,actiontype8,actionparam8,actiontype9,actionparam9,actiontype10,actionparam10,actiontype11,actionparam11,actiontype12,actionparam12,actiontype13,actionparam13,actiontype14,actionparam14,actiontype15,actionparam15,altitudemode,speed(m/s),poi_latitude,poi_longitude,poi_altitude(m),poi_altitudemode,photo_timeinterval,photo_distinterval\n';
		this._Csv3DString += String(this._LaunchLat * 180.0 / Math.PI) + ',' + String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) + ',' + '0.0' + ',' + '0.20000000298023224,0,2,' + '-90.0' + ',0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

		Alternate = 1;
		for (let k = 0; k < this._PosLon2.length; k++)
		{
			Lon = this._PosLon2[k];
			Lat = this._PosLat2[k];
			Head = this._PosHead2[k];

			this._Csv3DString += String(Lat) + ',' + String(Lon) + ',' + String(this._H) + ',' + String(Head) + ',' + '0.20000000298023224,0,2,';

			for (let kk = 0; kk < this._Tilt.length; kk++)
			{
				if (Alternate==1)
				{
					Tilt = this._Tilt[kk];
				}
				else
				{
					Tilt = this._Tilt[this._Tilt.length - 1 - kk];
				}

				if (kk == 0)
				{
					this._Csv3DString += String(Tilt - 90.0) + ',0,1000,1,0,';
				}
				else
				{
					this._Csv3DString += '5,'+ String(Tilt - 90.0) +',0,1000,1,0,';
					
				}
				

			}
			if (this._Tilt.length < 5)
			{
				for (let kk = this._Tilt.length; kk < 5; kk++)
				{
					this._Csv3DString += '-1,0,-1,0,-1,0,';
				}
			}
			
			this._Csv3DString += '-1,0,0,0,0,0,0,0,-1,-1\n';

			Alternate = (Alternate==1)? 0:1;

						
		}
		this._Csv3DString += String(this._LaunchLat * 180.0 / Math.PI) + ',' + String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) << ',' + '0.0'+ ',' + '0.20000000298023224,0,2,' + '-90.0' + ',0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

		
		
	}

	Get3DCsv()
	{
		//fs.writeFileSync(FilePath, this._Csv3DString);

		return this._Csv3DString;
	}

	Create3DCsv_video()
	{
		this._Csv3DVideoString = '';
		


		let Lon, Lat, Head, Tilt;


		let Alternate;

		let ActionsCount;


		

		this._Csv3DVideoString += 'latitude,longitude,altitude(m),heading(deg),curvesize(m),rotationdir,gimbalmode,gimbalpitchangle,actiontype1,actionparam1,actiontype2,actionparam2,actiontype3,actionparam3,actiontype4,actionparam4,actiontype5,actionparam5,actiontype6,actionparam6,actiontype7,actionparam7,actiontype8,actionparam8,actiontype9,actionparam9,actiontype10,actionparam10,actiontype11,actionparam11,actiontype12,actionparam12,actiontype13,actionparam13,actiontype14,actionparam14,actiontype15,actionparam15,altitudemode,speed(m/s),poi_latitude,poi_longitude,poi_altitude(m),poi_altitudemode,photo_timeinterval,photo_distinterval\n';
		this._Csv3DVideoString += String(this._LaunchLat * 180.0 / Math.PI) + ',' + String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) + ',' + '0.0' + ',' + '0.20000000298023224,0,2,' + '-90.0' + ',0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

		Alternate = 1;
		for (let k = 0; k < this._PosLon2.length; k++)
		{
			Lon = this._PosLon2[k];
			Lat = this._PosLat2[k];
			Head = this._PosHead2[k];

			ActionsCount = 0;

			this._Csv3DVideoString += String(Lat) + ',' + String(Lon) + ',' + String(this._H) + ',' + String(Head) + ',' + '0.20000000298023224,0,2,';

			for (let kk = 0; kk < this._Tilt.length; kk++)
			{
				if (Alternate)
				{
					Tilt = this._Tilt[kk];
				}
				else
				{
					Tilt = this._Tilt[this._Tilt.length - 1 - kk];
				}

				if (kk == 0)
				{
					this._Csv3DVideoString += String(Tilt - 90.0) << ',';

					

					if (k == 0)
					{
						this._Csv3DVideoString +=  '2,0,';

						ActionsCount++;
					}

					this._Csv3DVideoString += '0,1000,';
					ActionsCount++;
				}

				
				else
				{
					this._Csv3DVideoString += '5,' + String(Tilt - 90.0) + ',0,1000,';

					ActionsCount++;
					ActionsCount++;

					if (kk == this._Tilt.length - 1 && k == this._PosLon2.length - 1)
					{
						this._Csv3DVideoString += '3,0,';

						ActionsCount++;
					}

				}


			}
			if (ActionsCount < 15)
			{
				for (let kk = ActionsCount; kk < 15; kk++)
				{
					this._Csv3DVideoString += '-1,0,';
				}
			}

			this._Csv3DVideoString += '0,0,0,0,0,0,-1,-1\n';

			Alternate = (Alternate==1)?0:1;






		}
		this._Csv3DVideoString += String(this._LaunchLat * 180.0 / Math.PI) + ',' + String(this._LaunchLon * 180.0 / Math.PI) + ',' + String(this._H) + ',' + '0.0' + ',' + '0.20000000298023224,0,2,' + '-90.0' + ',0,1000,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,0,0,0,0,0,-1,-1\n';

		
		
	}
	Get3DCsv_video()
	{
		//fs.writeFileSync(FilePath, this._Csv3DVideoString);

		return this._Csv3DVideoString;
	}

	GetResults()
	{
		//fs.writeFileSync(FilePath, this._Results);

		return this._Results;
	}

	async RunAll() 
	{
		this.ConvertUnits();

		await this.GetLaunchPointZ();
	
		

		this.CalculateCameraSpecifics();

		this.SetAnchor();

		if (this._D2 == 1)
		{
			this.GetMetricBounds();

			this.Rotate(this._FlightDir);

			this.GetMinMaxEN();

			this.Plan_2D();

			this.Rotate( - this._FlightDir);
		}

		if (this._D3 == 1)
		{
			this.GetMetricBounds_3D();

			this.Plan_3D();

			this.GetFootPrint_3D();

			this.GetNadirFootPrint_3D();
		}

		this.GetGeographic();

		this.PrintResults();

	}

	ReturnSomething()
	{
		return 'testest';
	}
	
}

export default FlightPlanningWeb;