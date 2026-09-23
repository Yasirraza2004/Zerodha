import LeftSection from "./LeftSection";
import ProductsHero from "./ProductsHero";
import RightSection from "./RightSection";
import Universe from "./Universe";
import OpenAccount from "../OpenAccount";

function ProductPage() {
  return (
    <>
      <ProductsHero />

      <LeftSection
        imageURL="media/images/products-kite.png"
        imageStyle={{ width: "85%", marginLeft: "140px" }}
        productName="Kite"
        productDescription={
          <>
            Our ultra-fast flagship trading platform with <br />
            streaming market data, advanced charts, an <br />
            elegant UI, and more. Enjoy the Kite <br />
            experience seamlessly on your Android and <br />
            iOS devices.
          </>
        }
        productDescriptionStyle={{ fontSize: "19px", lineHeight:"1.7", marginBottom:"30px"}}
        link1={
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "17px"
            }}
          >
            Try demo<i class="fa-solid fa-arrow-right fa-2xs ms-1"></i>
          </a>
        }
        link2={
          <a
            href="#"
            style={{
              marginLeft: "50px",
              textDecoration: "none",
              fontSize: "17px",
            }}
          >
            Learn more<i class="fa-solid fa-arrow-right fa-2xs ms-1"></i>
          </a>
        }
      />

      <RightSection
        imageURL="media/images/products-console.png"
        imageStyle={{ width: "85%", marginLeft: "50px", marginTop:"10px" }}
        productName="Console"
        productNameStyle={{marginTop:"110px"}}
        productDescription={
          <>
            The central dashboard for your Zerodha <br />
            account. Gain insights into your trades and <br />
            investments with in-depth reports and <br />
            visualisations.
          </>
        }
        productDescriptionStyle={{paddingLeft: "140px", lineHeight: "1.7" }}

        link1={
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "18px"
            }}
          >
            Learn more<i class="fa-solid fa-arrow-right fa-2xs ms-1"></i>
          </a>
        }
      />

      <LeftSection
        imageURL="media/images/products-coin.png"
        imageStyle={{ width: "85%", marginLeft: "140px", marginTop:"85px" }}
        productName="Coin"
        productNameStyle={{ marginTop:"70px"}}
        productDescription={
          <>
            Buy direct mutual funds online, commission- <br />
            free, delivered directly to your Demat <br /> 
            account. Enjoy the investment experience <br />
            on your Android and iOS devices.
          </>
        }
        productDescriptionStyle={{ fontSize: "19px", lineHeight:"1.7"}}

        link1={
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "18px"
            }}
          >
            Coin<i class="fa-solid fa-arrow-right fa-2xs ms-1"></i>
          </a>
        }
      />

      <RightSection
        imageURL="media/images/landing (1).svg"
        imageStyle={{ width: "85%", marginLeft: "75px", marginTop:"16px"}}
        productName="Kite Connect API"
        productNameStyle={{marginTop:"-25px"}}
        productDescription={
          <>
            Build powerful trading platforms and <br /> 
            experiences with our super simple <br /> 
            HTTP/JSON APIs. If you are a startup, build <br /> 
            your investment app and showcase it to our <br /> 
            clientbase.
          </>
        }
        productDescriptionStyle={{ paddingLeft: "140px", lineHeight: "1.7"}}
        link1={
          <a
            href="#"
            style={{
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Kite Connect<i class="fa-solid fa-arrow-right fa-2xs ms-1"></i>
          </a>
        }
      />

      <LeftSection
        imageURL="media/images/varsity-products.svg"
        imageStyle={{ width: "55%", marginLeft: "200px", marginTop:"65px", marginBottom:"2.4rem"  }}
        productName="Varsity mobile"
        productNameStyle={{marginTop:"77px"}}
        productDescription={
          <>
            An easy to grasp, collection of stock market <br />
            lessons with in-depth coverage and <br /> 
            illustrations. Content is broken down into <br /> 
            bite-size cards to help you learn on the go.
          </>
        }
        productDescriptionStyle={{fontSize: "19px", lineHeight:"1.7"}}
      />

      <Universe />
    </>
  );
}

export default ProductPage;
