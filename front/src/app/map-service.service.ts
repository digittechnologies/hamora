import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {
  c: string[];
  cap: string;

  constructor(private http: HttpClient) { }

  getLocality(lat) {
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+lat+'ogun+state,Nigeria&key=AIzaSyBneTry7a6XDjUjSBLISxx7Fr6s0AePqVM');
  }

  localGovt() {
    return this.c = [
      '<a href="Content/Abeokuta-North" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://hotels.ng/guides/wp-content/uploads/2017/06/Abeokuta.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Abeokuta North</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Its headquarters are in the<br /> town of Akomoje, <br />'+
      'near Abeokuta. '+
      'It has an area of 808 km² and a<br /> population of 201,329 at the 2006 census.<br />'+
      'The local government area includes <br />the Oyan Dam, an important source of <br />water to the cities of<br /> Lagos and Abeokuta.<br /> '+
      '<a href="https://en.wikipedia.org/wiki/Abeokuta_North">More</a></p>'+
      '</div>'+
      '</a>' ,

      '<a href="Content/Abeokuta-South" id="content" class="p-2 text-dark" style="color: black">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoa5UtYnru3tXYKEs-znerz1vxPATeBIUk1BZRnIiiMhbY8xT&s" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Abeokuta South</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'The headquarters of the LGA<br /> are at Ake Abeokuta, <br />'+
      'It has an area of 71 km²<br /> and a population <br /> '+
      'of 250,278 at the 2006 census.<br /> The postal code of the area is 110.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Abeokuta_South">More</a></p>'+
      '</div>'+
      '</a>' ,

      '<a href="Content/Ado-Ota" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="http://www.finelib.com/images/listings/21318_company_logo.JPG" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ado Ota</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'The Ado-Odo/Ota Local Government Area<br /> is one of the 19 Local Government<br /> Areas of Ogun State, Nigeria. <br />It came into existence on<br /> May 19, 1989, following the<br /> merging of Ota, part of the defunct<br /> Ifo/Ota Local Government with Ado-Odo/Igbesa<br /> Areas of the Yewa <br />South Local Government.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ado-Odo/Ota">More</a></p>'+
      '</div>'+
      '</a>' ,

      '<a href="Content/Ewekoro" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://i.nona.net/locmap_EWEKORO_3.0486667X6.78X3.3846667X7.02.png" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ewekoro</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'The Ewekoro Local Government Area<br /> is one of the 19 Local Government<br /> Areas of Ogun State, Nigeria. <br /> Its headquarters are in the town of Itori,<br /> at 6°56′00″N 3°13′00″E.<br /> It has an area of 594 km² and<br /> a population of 55,156 at the 2006 census.<br /> The postal code of the area is 112.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ado-Odo/Ota">More</a></p>'+
      '</div>'+
      '</a>' ,

      '<a href="Content/Ifo" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://netstorage-legit.akamaized.net/images/vllkyt5ruap5avbin.jpg?imwidth=900" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ifo</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'The Ifo Local Government Area<br /> is one of the 19 Local Government<br /> Areas of Ogun State, Nigeria. <br /> Its headquarter is in Ifo town.<br /> This local council area dwellers are<br /> majorly into farming <br />(maily cultivation of Cassava, kolanut, sugarcane and plantain),<br /> local trading and related businesses.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ifo">More</a></p>'+
      '</div>'+
      '</a>' ,

      '<a href="Content/Ijebu North" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://amebohotnews.files.wordpress.com/2017/05/fb_img_1496128515035.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ijebu North</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'The local government was established<br /> in 1979 and has its headquarters at Ijebu Igbo. <br />It is bounded by Oluyole Local Government<br /> of Oyo State in the north, <br />in the west by Ijebu East Local Government,<br /> in the south by Ijebu North East, Odogbolu<br /> and Ijebu Ode Local Government,<br /> and in the east by Ikenne Local Government.<br /> The region is partitioned into <br />local wards Atikori, Oke-Agbo, Ojowo/Japara, <br />Oke-Sopen, Ome, Oru-awa-ilaporu,<br /> Osun and Ago-Iwoye urban I,<br /> Ago-Iwoye urban II, Ako-Onigbagbo Gelete,<br /> and Mamu/Ehin-Etiri.<br />'+
      'It plays host to Olabisi Onabanjo University <br />(Annex campus).'+
      'This region is peopled by<br /> the Ijebus, who live in<br /> the following major towns: <br />Ago-Iwoye, Oru, Awa, Ilaporu, etc. <br />There are several markets in the town <br />but the most popular of them all is<br /> Station Market. Also several indigenes<br /> of the town engage in timber<br /> business so there are many<br /> sawmills in the town.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ijebu_North">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/Ijebu Ode" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://hometown.ng/wp-content/uploads/2016/12/3357191_fbimg1454363767969_jpege6484eadd44d9d97978045744a6dd473-580x387.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ijebu Ode</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Ijebu-Ode is a town in Ogun State, <br />South-West Nigeria, close to the <br />A121 highway. The city is located<br /> 110 km by road north-east of Lagos;<br /> it is within 100 km of the<br /> Atlantic Ocean in the eastern<br /> part of Ogun State and possesses a<br /> warm tropical climate.'+
      'According to the Britannica,<br /> by the 16th century it was <br />established as the chief town, and since<br /> pre-colonial times it has been the capital of <br />the Ijebu kingdom.<br /> It has an estimated population of <br />222,653 (2007 census). It is home to<br /> Sungbos Eredo one of<br /> the largest ramparts in West Africa.<br />  As with most Ijebus,<br /> people from Ijebu Ode have a<br /> nationwide reputation of being<br /> natural entrepreneurs, with a<br /> shrewd business mindset..<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ijebu_Ode">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/Ijebu East" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="http://triplea2019.com/wp-content/uploads/2019/01/trpleai-640x477.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ijebu East</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Ijebu East is a Local Government Area<br /> bordering Lagos State and Lagos<br /> Lagoon in the south. <br />Its headquarters are in the town of<br /> Ogbere on the A121 highwayat6°44′N 4°10′E<br />'+
      'It has an area of 2,234 km² and a <br />population of 110,196 at the 2006 census.<br />'+
      'The postal code of the area is 120<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ijebu_East">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/Ikenne East" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="http://goldenoakestate.net/wp-content/uploads/2014/02/home-pic.png" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ikenne</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Eminent indegene include Late Chief <br />Obafemi Awolowo. The Ikenne Residence of Chief Obafemi<br /> Awolowo represents the hometown<br /> of the late Chief Obafemi Awolowo.<br /> The structure is located<br /> in Ikenne, Ogun state, south west Nigeria.<br /> The remains of Obafemi<br /> and Hannah Idowu Dideolu Awolowo(HID)<br /> were buried in this compound.<br />'+
      'The compound consists of a <br />Mausoleum where they were buried.<br /> The Museum harbored <br />some of his personal effects,<br /> which are displayed for tourism.<br /> As part of the museum is the <br />Mercedes-Benz E-Class (W212)<br /> used in 1979 and 1983 <br />campaign for his political ambition. <br />The Efunyela hall was built in the<br /> memory of his late mother chief (mrs) Efunyela Awolowo.<br /> The hall is used for reception of visitors <br />and for hosting major functions.<br /> It also has a worship sanctuary called<br /> the Embassy of the most high.<br /> The building also has a library called<br /> Sopolu Library built in remembrance<br /> of his late father.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ikenne">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/Imeko Afon" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://guardian.ng/wp-content/uploads/2016/03/imoke.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Imeko Afon</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'The local Government was created <br />from the old Egbado North Local <br />Government in December 1996,<br /> during the military regime of <br />General Sani Abacha. <br />The land area is about 1,711.43<br /> square kilometres (660.79 sq mi).<br /> The land is rolling,<br /> with small hills rising between 15<br /> and 70 metres above sea level. <br />The Yewa River runs through the area<br /> from North to South,<br /> with its tributaries, the rivers<br /> Oyan and Oha. The LGA is <br />bounded in the north by Oyo State,<br /> to the east by the Abeokuta North LGA,<br /> to the south by the Yewa North LGA<br /> and to the west it shares an international<br /> border with Benin. <br />The international border is 93 kilometres (58 mi),<br /> and is one of the most accessible<br /> stretches of border between the two countries.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Imeko_Afon">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/Imeko Afon" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://1.bp.blogspot.com/-Hd453TGBw0Q/Vxc9jceOg8I/AAAAAAAAAcY/3zGho5LmmSw2DfZ1JT1SXqWuy_s0VzwhACLcB/s1600/IMG-20160420-WA0000.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ipokia</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Ipokia is a Local Government Area<br /> in the west of Ogun State,<br /> Nigeria bordering the Republic of Benin. <br />Its headquarters is Ipokia town.<br /> There are other towns like Idiroko, Oniro,<br/> Ita Egbe, Ihunbo, Agosasa, Aseko,<br /> Maun, Koko, Iropo, Alaari,<br /> Tube, Ilashe, Ifonyintedo,<br /> Madoga, Ijofin and Tongeji in the town<br /> of Ipokia at6°32′00″N 2°51′00″E.<br />'+

      '<a href="https://en.wikipedia.org/wiki/Imeko_Afon">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/obafemi" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://www.informationng.com/wp-content/uploads/2013/09/motorparkss.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Obafemi Owode</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Obafemi Owode Local Government came<br /> into existence through Edict No.9<br /> of 1976, resulting from the<br /> 1976 Local Government reforms, <br />prior to this period,<br /> the administration of the area was <br />carried out by Oba Provincial Authority, <br />Owode District Council<br /> and Obafemi District Council'+
      'Obafemi Owode Local Government<br /> has its headquarters at Owode Egba.<br />'+

      '<a href="https://en.wikipedia.org/wiki/Obafemi_Owode">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/odeda" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://www.researchgate.net/profile/Jubril_Soaga3/publication/285235944/figure/fig1/AS:304498661707776@1449609546267/Map-of-Odeda-Local-Government-Area-showing-the-study-site_Q640.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Odeda</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'The headquarters of the LGA <br />are at Odeda on the A5<br /> highway7°13′00″N 3°31′00″E. <br />It has an area of 1,560 km² <br />and a population of 109,449 at the 2006 census.<br /> The postal code of the area is 110.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Odeda">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/odogbolu" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://i.nona.net/locmap_ODOGBOLU_3.5986667X6.73X3.9346667X6.97.png" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Odogbolu</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Its headquarters are in the <br />town of Odogbolu at 6°50′N 3°46′E <br />in the north-west of the Area. <br />It has an area of 541 km² and a<br /> population of 127,123 at the 2006 census.<br /> The postal code of the area is 120.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Odogbolu">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/ogunwaterside" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://www.nairaland.com/attachments/2550240_4040_jpegb5f4dfe0bafd5b8a4273bf14980bd24b" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Ogun WaterSide</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'It is the only area of the state with a<br /> coastline on the Bight of Benin and <br />also borders Lagos Lagoon.<br /> Its headquarters are in the town of<br /> Abigi at 6°29′N 4°24′E.<br /> Other towns and villages in the local government<br /> include: Ilushin, Lukogbe, Iwopin,<br />Makun-omi, Ode Omi, Ibu, Itebu Manuwa,<br /> Ibiade, Efire, Lomiro, Oni,<br /> Ayede, Igele, Ayila and Irokun among others.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Ogun_waterside">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/remo_north" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgE1VGuc6kHQyDNirgCEOUuzxQoH3s4Mn05v2yf_yVUkwRC9Xcg&s" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Remo North</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Isara-Remo is an ancient town <br />in the present-day Remo North Local<br /> Government Area in Ogun State in Nigeria.<br /> It is the headquarters of the<br /> Remo North LGA local government area (LGA).<br /> It has an area of 199 km² <br />and a population of 59,911<br /> at the 2006 census. It is the 6th <br />largest town in Ogun state <br />following Abeokuta, Ijebu Ode, ijebu Igbo,<br /> Sagamu and Ago Iwoye. Isara-Remo<br /> is almost exactly halfway between Lagos <br />and Ibadan, very large <br />metropolitan cities that have strongly<br /> influenced the history of Nigeria.<br />'+
      'Isara-Remo was founded by a <br />hunter who was an Ife Prince.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Remo_North">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/sagamu" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="http://news.ogunstate.gov.ng/wp-content/uploads/2017/12/story24.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Sagamu</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'Sagamu or Ishagamu is a conglomeration<br /> of thirteen towns located in Ogun State <br />along the Ibu River and Eruwuru<br /> Stream between Lagos and Ibadan,<br /> founded in the mid 19th century by members of the<br /> Remo branch of the Yoruba <br />people in south-western Nigeria.<br />'+
      '<a href="https://en.wikipedia.org/wiki/sagamu">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/yewa-north" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://www.championnews.com.ng/wp-content/uploads/2016/09/Pastor-Wale-Fagbere-became-motionless-trying-to-destroy-a-shrine.-Ogun-State-700x430.png" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Yewa North</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      ' bordering the Republic of Benin.<br /> Its headquarters are in the town of <br />Aiyetoro (or Ayetoro)<br /> at7°14′00″N 3°02′00″E <br />in the north-east of the Area.<br />'+
      'It has an area of 2,087 km² and a <br />population of 181,826 at the 2006 census.<br />'+
      'The postal code of the area is 111.<br />'+
      'Aiyetoro, established around<br /> 1813, is one of the<br /> founding cites that formed Ogun <br />State in the mid-1970s.<br /> It hosts one of the best secondary school<br /> in the old Western Region - Comprehensive<br /> High School, Aiyetoro.<br /> Which currently falls within Yewa North. <br />The town also has a higher <br />education institution,<br /> Olabisi Onabanjo University (Aiyetoro), <br />which is due to be<br /> upgraded to a full University of Agriculture.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Yewa_North">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/yewa-south" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://2.bp.blogspot.com/-B2YRB0r0MZg/WKdnWaroRDI/AAAAAAAAE9M/0nszVa4ru54WUdpmY-CzA_uZkAbr9vRNACLcB/s1600/getLarge.jpeg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Yewa South</b>,is a Local Government Area<br /> in Ogun State, <b>Nigeria.</b><br />' +
      'bordering the Republic of Benin. <br />Its headquarters are in the town of <br />Ilaro at6°53′00″N 3°01′00″E<br /> in the north of the Area. <br />It has an area of 629 km² and<br /> a population of 168,850 at the 2006 census.<br /> The postal code of the area is 111.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Yewa_South">More</a></p>'+
      '</div>'+
      '</a>',

      '<a href="Content/Abeokuta" id="content" class="p-2 text-dark" style="color: green">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<img id="firstHeading" class="img img-rounded" src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Rock_view_in_Abeokuta%2C_Ogun_State-Nigeria.jpg" width="300" height="200">'+
      '<div id="bodyContent">'+
      '<p><b>Abeokuta</b>,is the state capital of <br /> of Ogun State, <b>Nigeria.</b><br />' +
      'It is situated on the east bank<br /> of the Ogun River, near a group<br /> of rocky outcrops in a wooded savanna;<br /> 77 kilometres (48 mi) north of Lagos by <br />railway, or 130 kilometres (81 mi)<br /> by water. As of 2006, Abeokuta<br /> and the surrounding area had a<br /> population of 449,088.<br /> '+
      'Abẹokuta lies in fertile country<br /> of wooded savanna, the surface<br /> of which is broken by<br /> masses of grey granite. <br />It spreads over an extensive area,<br /> being surrounded by<br /> mud walls 18 miles in extent.<br /> Palm oil, lumber, natural rubber,<br /> yams, rice, cassava, maize,<br /> cotton, other fruits, and <br />shea butter are the chief articles<br /> of trade. It is a key <br />export location for cocoa, <br />palm products, fruit, and <br />kola nuts. Both rice and cotton<br /> were introduced by the missionaries<br /> in the 1850s and have <br />become integral parts of the economy,<br /> along with the dye indigo.<br />'+
      'Abeokuta lies below the Olumo Rock,<br /> home to several caves and shrines.<br /> The town depends on the<br /> Oyan River Dam for <br />its water supply, which is <br />not always dependable.<br />The dam is situated in the Abeokuta North<br /> local government area of Ogun State<br /> in the West of Nigeria, <br />about 20 km northwest of the <br />state capital Abeokuta. <br />The dam crosses the Oyan River,<br /> a tributary of the Ogun River.<br />'+
      'Abeokuta is the headquarters<br /> of the federal Ogun-Oshun <br />River Basin Authority, which is<br /> responsible for development<br /> of land and water resources for Lagos, <br />Ogun, and Oyo states. <br />Included in this are irrigation, <br />food-processing, and electrification.<br />'+
      'Local industries include <br />but not limited to fruit <br />canning plants, plastics, <br />breweries, sawmills, <br />and an aluminum products factory. <br />South of town are the Aro <br />granite quarries.<br />'+
      '<a href="https://en.wikipedia.org/wiki/Abeokuta">More</a></p>'+
      '</div>'+
      '</a>' 
    ];
  }


}
