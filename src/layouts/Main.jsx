import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import Header from "./Header";
import Splash from "../pages/Splash";
import FloatingMenu from "./FloatingMenu";
import ScrollAutoTop from "../utils/ScrollAutoTop";
import up from "../assets/up.svg";

const JWT_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJJcXJhIEFwcCIsImlhdCI6MTc0NzY4NDg2NiwiZXhwIjozMzMwNTYyNjcwNSwiYXVkIjoiaHR0cHM6Ly9pcXJhLWJhY2tlbmQtZ2l0LW1hc3Rlci1pZnRpa2hhcnJhc2hhcy1wcm9qZWN0cy52ZXJjZWwuYXBwIiwic3ViIjoiNjRhMWE2NDU0NTYxNTRlZWRjMTJhNTA1IiwibmFtZSI6IklmdGlraGFyIFJhc2hhIiwiZW1haWwiOiJpZnRpa2hhcnJhc2hhQGdtYWlsLmNvbSIsInR5cCI6ImRldmVsb3BlciJ9.MFBm-DkslbE7BEDDYJx2jMD_NMf5BqIPwAGWwCfg2vU';

const Main = () => {
    const [session, setSession] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false); 
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedSession = sessionStorage.getItem("session");
        if (storedSession) {
            setSession(true);
        }
    }, []);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('https://iqra-backend-git-master-iftikharrashas-projects.vercel.app/api/iqra/book/surah', {
                headers: {
                    Authorization: " Bearer " + JWT_TOKEN,
                }
            }); 
              setData(response.data.data);
              setLoading(response.data.success);
          } catch (error) {
              console.error('Error fetching inventory data', error);
          } 
      };
  
      fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sessionStart = () => {
        sessionStorage.setItem("session", true);
        setSession(true);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <ScrollAutoTop>
            <div className="bg-pattern-body bg-light-olive">
                {
                    !session ? <Splash loading={loading} sessionStart={sessionStart}/> : 
                    <>
                        <Header/>
                        <section className="pb-28">
                            <Outlet context={{loading, data}}></Outlet>
                        </section>
                        <FloatingMenu/>
                        {showScrollTop && (
                            <button
                                onClick={scrollToTop}
                                className="fixed bottom-20 right-4 transition duration-300"
                                aria-label="Scroll to Top"
                            >
                                <img src={up} alt="" />
                            </button>
                        )}
                    </>
                }
            </div>
        </ScrollAutoTop>
    );
};

export default Main;