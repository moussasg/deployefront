import Opp from "./../assets/opp.jpg" // les images
import App from "./../assets/apple.png"
import Rea from "./../assets/rea.png"
import Xi from "./../assets/xi.png" // xiaomi
import Sam from "./../assets/sam.jpg" // samsung
import huita from "./../assets/8a.png" // 
import neufa from "./../assets/9a.jpg"
import treize from "./../assets/13.jpeg"
import qautorze from "./../assets/14.jpg"
import ultra from "./../assets/s21.jpeg"
import ultra2 from "./../assets/S22.jpeg"
import dixa from "../assets/dix10.png"
import renosept from "../assets/reno7.jpg"
import sam23 from "../assets/sams23.jpg"
import douze from "../assets/douze.jpg"
import relame8 from "../assets/realme8.jpg"
import relame9 from "../assets/realme9.jpg"
import relame10 from "../assets/relame10.jpg"
import reno8 from "../assets/reno8.jpg"
import reno9 from "../assets/reno9.jpeg"
export const MesSmartphones = [
    { //////////////
      id: "1",
      image: Xi,
      buttonText: "Our Products Xiaomi",
      produits:[
        {
          marque :"Xioami",
          imgp: huita,
          nom: "8a" ,
          caractér: "features: Ram : 4gb " ,
          prix : 21000 ,
          ram : "4gb",
          gb:"64gb",
          Ajouté:"Added to cart" , 
        },
        {
          imgp:neufa,
          nom:"9a" ,
          caractér: "features : Ram : 2gb" ,
          prix : 22000,
          ram : "2gb",
          gb:"32gb",
          Ajouté:"Added to cart",
        },
        {
          imgp:dixa,
          nom:"10a" ,
          caractér: "features : Ram : 2gb" ,
          prix : 24000,
          ram : "2gb",
          gb:"32gb",
          Ajouté:"Added to cart",
        }
      ]
    }, //////////////
    { //////////////////
      id: "2",
      image: App,
      buttonText: "Our Products Apple",
      produits:[
        {
          marque :"Apple" ,
          imgp: treize ,
          nom:"13" ,
          caractér: "features : Ram : 6gb" ,
          prix : 220000 ,
          ram : "6gb",
          gb:"32gb",
          Ajouté:"Added to cart",
        },
        {
          imgp: qautorze ,
          nom:"14" ,
          caractér: "features : Ram : 4gb" ,
          prix : 330000 ,
          ram : "4gb",
          gb:"64gb",
          Ajouté:"Added to cart",
        }, 
        {
          marque :"Apple" ,
          imgp: douze ,
          nom:"13" ,
          caractér: "features : Ram : 3gb" ,
          prix : 180000 ,
          ram : "6gb",
          gb:"32gb",
          Ajouté:"Added to cart",
        }
      ]
    },
    ///////////////////
    {
      id: "3",
      image: Sam,
      buttonText: "Our Products Samsung",
      produits:[
        {
          marque :"Smasung",
          imgp: ultra , 
          nom:"s21" ,
          caractér: "features : Ram : 8gb" ,
          prix : 220000 ,
          ram : "8gb",
          gb:"128gb",
          Ajouté:"Added to cart",

        },
        { //sam23
          imgp:ultra2, 
          nom:"s22" ,
          caractér: "features : Ram : 12gb" ,
          prix : 220000,
          ram : "12gb",
          gb:"256gb",
          Ajouté:"Added to cart",
        },{ //sam23
          imgp:sam23, 
          nom:"s23" ,
          caractér: "features : Ram : 12gb" ,
          prix : 250000,
          ram : "12gb",
          gb:"256gb",
          Ajouté:"Added to cart",
        }
      ]
    },
    ////////////////////
    {
      id: "4",
      image: Rea,
      buttonText: "Our Products Realme",
      produits:[
        {
          marque :"Realme" ,
          nom:"relame8" ,
          imgp: relame8,
          Ajouté:"Added to cart",

        }, // renosept
        {
          imgp: relame9,
          nom:"relame9" ,
          Ajouté:"Added to cart",
        },{
          imgp: relame10,
          nom:"relame10" ,
          Ajouté:"Added to cart",
        }
      ]
    },
    /////////////////////
    {
      id: "5",
      image: Opp,
      buttonText: "Our Products Oppo",
      produits: [
        {
          marque :"Oppo" ,
          imgp: reno8,
          nom:"reno 8" ,//reno8
          Ajouté:"Added to cart",
        },
        {
          marque :"Oppo" ,
          nom:"reno 7" ,
          imgp: renosept,
          gb:"256gb",
          Ajouté:"Added to cart" ,

        },
        {
          marque :"Oppo" ,
          imgp: reno9,
          nom:"reno9" ,//reno8
          Ajouté:"Added to cart",
        }
      ]
    }
    /////////////
  ];
export default MesSmartphones

