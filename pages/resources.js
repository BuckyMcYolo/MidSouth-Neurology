import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import resourceStyles from "../styles/resourceStyles.module.css"
import Head from "next/head"

const resources = () => {
  return (
    <div className="bg-[url('/website-background-08.jpg')] bg-fixed opacity-100">
      <Head>
        <title>Resources - Midsouth Neurology</title>
      </Head>{" "}
      <NavBar />
      <p className="text-4xl bg-slate-600/40 text-slate-900 text-center py-8 mb-10 border-b-2 border-black font-bold">
        Resources:
      </p>
      <section className={resourceStyles.mainGrid}>
        {" "}
        <p className="text-center  border-black"></p>
        <ul className="">
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Strokes{" "}
              <span className="text-lg py-2">
                (American Stroke Association)
              </span>
              <button>
                <a href="https://www.stroke.org/en/about-stroke">Website</a>
              </button>
            </p>
          </li>
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Epilepsy{" "}
              <span className="text-lg py-2">(Epilepsy Foundation)</span>
              <button>
                <a href="https://www.epilepsy.com/">Website</a>
              </button>
            </p>
          </li>
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Migraines{" "}
              <span className="text-lg py-2">
                (American Migraine Foundation)
              </span>
              <button>
                <a href="https://americanmigrainefoundation.org/">Website</a>
              </button>
            </p>
          </li>
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Multiple Sclerosis{" "}
              <span className="text-lg py-2">(National MS Society)</span>
              <button>
                <a href="https://www.nationalmssociety.org/">Website</a>
              </button>
            </p>
          </li>
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Muscular Dystrophy{" "}
              <span className="text-lg py-2">
                (Muscular Dystrophy Association)
              </span>
              <button>
                <a href="https://www.mda.org/">Website</a>
              </button>
            </p>
          </li>
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Alzheimers{" "}
              <span className="text-lg py-2">(Alzheimers Association)</span>
              <button>
                <a href="https://www.alz.org/">Website</a>
              </button>
            </p>
          </li>
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Medicare <span className="text-lg py-2">(Medicare.gov)</span>
              <button>
                <a href="https://www.medicare.gov/">Website</a>
              </button>
            </p>
          </li>
          <li className="border-b-2 border-black">
            <p className={resourceStyles.cards}>
              {" "}
              Parkinson's{" "}
              <span className="text-lg py-2">(Parkinson's Foundation)</span>
              <button>
                <a href="https://www.parkinson.org/?utm_source=bing&utm_medium=cpc&utm_campaign=Bing_AlwaysOn_Brand&utm_term=www%20parkinson%20org&msclkid=1bbb8acf4ec4101d8e74e9c20d46eb1f&utm_content=Parkinson.org_Exact">
                  Website
                </a>
              </button>
            </p>
          </li>
        </ul>{" "}
      </section>{" "}
      <Footer />
    </div>
  )
}

export default resources
