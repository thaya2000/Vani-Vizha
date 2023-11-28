import "./Text.css";
import Navaratri from "../assets/img/Navaratri.png";
import Navaratri_text from "../assets/img/Navatri_text.png";
import Navaratri_animation from "../assets/img/Navaratri_text_animation.png";
import { useParams } from "react-router-dom";

export default function Text() {
  const { index } = useParams();

  var inviteesList = {
    1: "DR. CHITHRAL AMBAWATTE",
    2: "MS. H.D. DISSANAYAKE",
    3: "DR. KUMUDU SENEVIRATNA",
    4: "DR. W.T.G. SAMANTHA",
    5: "DR.(MRS) W.M.I. UDAYANGANIE",
    6: "DR.(MRS) N.M. WAGARACHCHI",
    7: "MRS. M.H.M.R.S. DILHANI",
    8: "MRS. RANJIKA LALANI PERERA",
    9: "MR. PRANEETH WIJESINGHE",
    10: "MS. SAUMYA BATUWATTA",
    11: "MS. K.G. CHANDIMA JAYAMINI",
    12: "MS. SUMEDHA DILHANI",
    13: "DR. M.R.UDAWALPOLA",
    14: "DR. S.H.K.K. GUNAWICKRAMA",
    15: "DR. P.D.C. PERERA",
    16: "MR. D.S. DE SILVA",
    17: "DR. C.K.W. SENEVIRATNE",
    18: "DR. S.H. GUNAWARDENA",
    19: "DR. N.W.J.A.L. PRINS",
    20: "DR. K.L.KUSHAN SUDHEERA",
    21: "DR. G.G.N. SANDAMALI",
    22: "DR. K.M.I.U. RANAWEERA",
    23: "DR. W.N.B.A. GEETH PRIYANKARA",
    24: "MR. K.M.S. KONARA",
    25: "MR. ACHINTHA I. KONDARAGE",
    26: "MS. M.K.U. SANDARENU",
    27: "MS. D.C. MAHEEPALA",
    28: "MS. W.D.C.D. WELMILLA",
    29: "MR. T.H. NAGAHAWATHTHA",
    30: "MR. NAVODIKA KARUNASINGHA",
    31: "MS. MADARA THALPAVILA",
    32: "MR. MANUJ PAMOD DE SILVA",
    33: "DR. J.M.R.S. APPUHAMAI",
    34: "PROF. SUDDERA DE SILVA",
    35: "PROF. G.M.M. SUBASHI DE SILVA",
    36: "PROF. G.G. CHAMINDA THUSHARA",
    37: "PROF. K.S. WANNIARACHCHI",
    38: "DR. H.P. SOORIYAARACHCHI",
    39: "DR. N.H. PRIYANKARA",
    40: "DR. W.K.C. NEETHA DAYANTHI",
    41: "DR. T.N. WICKRAMAARACHCHI",
    42: "DR. S.N. MALKANTHI",
    43: "DR. CHAMPIKA ELLAWALA",
    44: "DR. B.M.L.S. BASNAYAKA",
    45: "DR. W.M.K.R.T.W. BANDARA",
    46: "DR. SUJEEWA WIMALASENA",
    47: "DR. TERANCE M. RENGARASU",
    48: "DR. VIDURA VITHANA",
    49: "DR. S.W. SENEVIRATHNA",
    50: "DR. ANURUDDHIKA G. WIJESINGHE",
    51: "MS. SACHINTHANI WARNASURIYA",
    52: "MS. ASHVITHA YOGANATHAN",
    53: "MS. ISHARA NAVEENDI",
    54: "MS. P.C.M. WIJESENA",
    55: "MR. P. NAVEEN",
    56: "MS. T. NEKASINY",
    57: "MR. T.K.S. FERNANDO",
    58: "MR. D.H. ACHINTHAKA MADURANGA",
    59: "MS. S.M.D. VIDARSHI SURAWEERA",
    60: "DR. RUWAN GALLAGE",
    61: "PROF. CHAMINDA KARUNASENA",
    62: "DR. INDIKA PERERA",
    63: "DR. NANDITHA HETTIARACHCHI",
    64: "DR. MUDITHA DASSANAYAKE",
    65: "DR. THANUJA SRIMAL",
    66: "DR. KUMARA JAYAWICKRAMA",
    67: "DR. BUDDHIKA ANNASIWATHTHA",
    68: "DR. THILINI MUTHUMALI DE SILVA",
    69: "DR. DINESH WEERASOORIYA",
    70: "MRS. KALPANI PATHMASIRI",
    71: "MR. VARUNA PRIYANKARA",
    72: "MR. K.C. WICKRAMASINGHE",
    73: "MR. Y.S.K. DE SILVA",
    74: "MR. SUPUN SANJAYA",
    75: "MR. MADHUKA PRIYASHAN",
    76: "MR. DAHAM LIYANAGE",
    77: "MS. HIRUNI WIJERATHNE",
    78: "MR. ROY SANKANARAYANA",
    79: "MR. INDUNIL",
    80: "MR. DANDENIYA",
    81: "DR. SUMITH BADUGE",
    82: "MR. VEDITHA DE SILVA",
    83: "MR. G.G. JAYARATHNE",
    84: "MR. ANANDA SIRIWARDANA",
    85: "MR. THARINDU",
    86: "MR. AJANTHA DANTHANARAYANA",
    87: "MR. JAGATH",
    88: "MS. PRIYANI KAHAVATTA",
    89: "PRESIDENT - STUDENT UNION FACULTY OF ENGINEERING",
    90: "PRESIDENT - ART SOCIETY FACULTY OF ENGINEERING",
    91: "ALL BATCHES REPRESENTATIVE",
    92: "20TH BATCH REPRESENTATIVE",
    93: "21ST BATCH REPRESENTATIVE",
  };
  return (
    <>
      <div className="text">
        <p> We extend a gracious invitation to.</p>
        <h1>{index == null ? "" : inviteesList[index]}</h1>
        {/* <h2>etuhj;jpup tpoh 2023</h2> */}
        <img src={Navaratri_text} alt="" />
        <h2>Navaratri Vizha 2023</h2>
        <h3>DATE : 20.11.2023</h3>
        <h3>VENUE : AUDITORIUM</h3>
        <h3>TIME : 5.05PM ONWARDS</h3>
      </div>
    </>
  );
}
