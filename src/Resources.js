import './global.css';
import './Resources.css';
import { useState, useRef, useEffect } from 'react';
import { PageHead, PageFoot } from './App';
import English from './English';
import Albanian from './Albanian';
import { settings } from './Settings';

/**
 * The HTML for the resources page.
 * @returns {HTMLElement} An HTMLElement representing the resources page, with class "Resources".
 */
function Resources() {
    const [openImage, setImageOpened] = useState(false);
    const [openedSRC, setOpenSRC] = useState("");
    const [openedSRC2, setOpenSRC2] = useState("");
    const [caption, setCaption] = useState("");
    const [caption2, setCaption2] = useState("");
    const ref = useRef(null);

    const [slide1Height, setSlide1Height] = useState(0);
    const [slide2Height, setSlide2Height] = useState(0);
    const [slide3Height, setSlide3Height] = useState(0);
    const [slide4Height, setSlide4Height] = useState(0);
    const [slide5Height, setSlide5Height] = useState(0);
    const [slide6Height, setSlide6Height] = useState(0);
    const [slide7Height, setSlide7Height] = useState(0);
    const [slide8Height, setSlide8Height] = useState(0);
    const [slide1, setSlide1] = useState(0);
    const [slide2, setSlide2] = useState(0);
    const [slide3, setSlide3] = useState(0);
    const [slide4, setSlide4] = useState(0);
    const [slide5, setSlide5] = useState(0);
    const [slide6, setSlide6] = useState(0);
    const [slide7, setSlide7] = useState(0);
    const [slide8, setSlide8] = useState(0);

    const [showToTop, setShowToTop] = useState(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    window.addEventListener("scroll", e => {
        setShowToTop(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    });

    /**
     * Loads an image into the modal popup and displays the modal
     * @param {number} num An index representing which image to load
     */
    const load = num => {
        document.body.style.overflowY = "hidden";
        if (num === 4) {
            const img1 = document.getElementById("img4");
            const img2 = document.getElementById("img5");
            setImageOpened(true);
            setOpenSRC(img1.src);
            setOpenSRC2(img2.src);
            setCaption(img1.alt);
            setCaption2(img2.alt);
        }
        else {
            const image = document.getElementById(`img${num}`);
            setImageOpened(true);
            setOpenSRC(image.src);
            setCaption(image.alt);
            setOpenSRC2("");
            setCaption2("");
        }
    }

    return (
        <div className="Resources">
            <PageHead></PageHead>
            <div className="title-box Vert-flex" style={{ backgroundImage: `linear-gradient(to bottom, rgba(204,208,209,0) 0%, rgba(220,224,225,0.75) 75%, rgba(236,240,241,1) 100%), url(${process.env.PUBLIC_URL}/resources-background.jpg)` }}>
                <English><h2 className="page-title">Resources</h2></English>
                <Albanian><h2 className="page-title">Burimet</h2></Albanian>
                <English><h3 className="page-subtitle">Learn more about solar photovoltaics!</h3></English>
                <Albanian><h3 className="page-subtitle">Mësoni më shumë rreth fotovoltaikëve diellorë!</h3></Albanian>
            </div>
            <div className="content">
                <TableOfContents setSlides={{
                    setSlide1: setSlide1,
                    setSlide2: setSlide2,
                    setSlide3: setSlide3,
                    setSlide4: setSlide4,
                    setSlide5: setSlide5,
                    setSlide6: setSlide6,
                    setSlide7: setSlide7,
                    setSlide8: setSlide8
                }}></TableOfContents>
                <button id="scroll-to-top" style={{ opacity: showToTop ? 1 : 0 }} type="button" onClick={e => {
                    e.preventDefault();
                    document.body.scrollIntoView({
                        behavior: "smooth"
                    });
                }}>▲</button>
                <div id="modal-img" ref={ref} className={openImage ? "" : "invisible"}>
                    <span className="close-modal" onClick={() => {
                        ref.current.scrollTo(0, 0);
                        setImageOpened(false);
                        document.body.style.overflowY = "scroll";
                    }}>&times;</span>
                    <div className="modal-content">
                        <div className="modal-caption">{caption}</div>
                        <img className="modal-img-src" src={openedSRC} alt={caption} />
                        <img className="modal-img-src" src={openedSRC2} alt={caption2} />
                    </div>
                </div>
                <div>
                    <FadeInSection id="section-1">
                        <div>
                            <English><h1 className="largerfontb" id="res-why-imp">Impacts of Solar Energy</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-why-imp"></h1></Albanian>
                        </div>
                        <span id="res-why-imp-content"></span>
                        <div className="slideshow-display" style={{ height: slide1Height }} onLoad={e => {
                            let maxHeight = 0;
                            for (let slide of e.currentTarget.querySelectorAll(".slide").values()) {
                                maxHeight = Math.max(maxHeight, slide.scrollHeight);
                            }
                            setSlide1Height(maxHeight);
                        }}>
                            <div className={"slide fade" + (slide1 === 0 ? "" : " hidden-slide")}>
                            <img className={"imagefloat-right" + (slide1 === 0 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "mitigateclimatechange.png"} alt="Mitigating Climate Change" onClick={() => load(0)} width="450" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-the-enviro">Helps mitigate climate change.</h3></English>
                                    <Albanian><h3 id="res-the-enviro"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Albania’s power generation mainly comes from hydropower.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Hydropower is becoming less reliable due to climate change.</English>
                                            <Albanian>Ofron cilësi më të mirë të ajrit.</Albanian>
                                        </li>
                                        <li>
                                            <English>This means Albania is importing a lot of energy from other countries.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Using solar energy can help reduce the reliance on fossil fuels such as coal, natural gas, and oil.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>This helps reduce the emission of harmful greenhouse gasses to the atmosphere.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Therefore providing better air quality for us!</English>
                                            <Albanian></Albanian>
                                        </li>
                                    </ul>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide1 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 1 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "solarmap.png"} alt="Benefits" onClick={() => load(0)} width="360" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-sunny-pot">Sunny Potential</h3></English>
                                    <Albanian><h3 id="res-sunny-pot">Potencial me diell</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Albania has extensive potential for solar energy.</English>
                                            <Albanian>Shqipëria ka një potencial të gjerë për energjinë diellore.</Albanian>
                                        </li>
                                        <li>
                                            <English>Between 2400-2500 hours of sunshine per year.</English>
                                            <Albanian>Mes 2400-2500 orëve me diell në vit.</Albanian>
                                        </li>
                                        <li>
                                            <English>The irradiation is the amount of power received from the sun.</English>
                                            <Albanian>Rrezatimi është sasia e fuqisë së marrë nga dielli.</Albanian>
                                        </li>
                                        <li>
                                            <English>The graph to the right shows the irradiation of Albanian regions.</English>
                                            <Albanian>Grafiku në të djathtë tregon rrezatimin e rajoneve shqiptare.</Albanian>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide1(((slide1 - 1) % 2 + 2) % 2)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide1((slide1 + 1) % 2)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering">
                            <span className={"slide-dot" + (slide1 === 0 ? " active" : "")} onClick={() => setSlide1(0)}></span>
                            <span className={"slide-dot" + (slide1 === 1 ? " active" : "")} onClick={() => setSlide1(1)}></span>
                        </div>
                    </FadeInSection>

                    <FadeInSection id="section-2">
                        <div>
                            <English><h1 className="largerfontb" id="res-why-imp">The benefits of solar energy for your business</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-why-imp"></h1></Albanian>
                        </div>
                        <span id="res-why-imp-content"></span>
                        <div className="slideshow-display" style={{ height: slide1Height }} onLoad={e => {
                            let maxHeight = 0;
                            for (let slide of e.currentTarget.querySelectorAll(".slide").values()) {
                                maxHeight = Math.max(maxHeight, slide.scrollHeight);
                            }
                            setSlide1Height(maxHeight);
                        }}>
                            <div className={"slide fade" + (slide1 === 0 ? "" : " hidden-slide")}>
                            <img className={"imagefloat-right" + (slide1 === 0 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "why1.png"} alt="Benefits" onClick={() => load(0)} width="450" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-the-enviro">Reduce Energy Costs</h3></English>
                                    <Albanian><h3 id="res-the-enviro"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Electricity bills depend on how much energy is consumed and the rate a utility company charges.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Utility companies face high costs to maintain and expand the grid. That makes electricity bills more expensive.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Businesses can avoid electricity price increases by switching to solar!</English>
                                            <Albanian></Albanian>
                                        </li>
                                        

                                     
                                    </ul>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide1 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 1 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "why2.png"} alt="Benefits" onClick={() => load(0)} width="450" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-sunny-pot">Increased Energy Security and Independence</h3></English>
                                    <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Businesses become their own power provider.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Costs of using solar are very predictable.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Businesses don't have to rely on an undependable grid.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>

                            <div className={"slide fade" + (slide1 === 2 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 2 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "why3.png"} alt="Benefits" onClick={() => load(0)} width="450" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-sunny-pot">Green Business</h3></English>
                                    <Albanian><h3 id="res-sunny-pot">Potencial me diell</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                    <li>
                                            <English>Going green saves money through energy efficiency.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Going green helps the environment by cutting greenhouse gas emissions.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Going green reduces costs.</English>
                                            <Albanian></Albanian>
                                        </li>
                                        <li>
                                            <English>Going green enhances a company's reputation.</English>
                                            <Albanian></Albanian>
                                        </li>
                                    
                                        
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide1(((slide1 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide1((slide1 + 1) % 3)}>&#10095;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide1((slide1 + 1) % 3)}>&#10095;</button>



                        </div>
                        <div className="image-center-centering">
                            <span className={"slide-dot" + (slide1 === 0 ? " active" : "")} onClick={() => setSlide1(0)}></span>
                            <span className={"slide-dot" + (slide1 === 1 ? " active" : "")} onClick={() => setSlide1(1)}></span>
                            <span className={"slide-dot" + (slide1 === 2 ? " active" : "")} onClick={() => setSlide1(2)}></span>

                        </div>
                    </FadeInSection>

                    <FadeInSection id="section-3">
                        <div>
                            <English><h1 className="largerfontb" id="res-why-imp">Should your business go solar?</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-why-imp"></h1></Albanian>
                        </div>
                        <span id="res-why-imp-content"></span>
                        <div className="slideshow-display" style={{ height: slide1Height }} onLoad={e => {
                            let maxHeight = 0;
                            for (let slide of e.currentTarget.querySelectorAll(".slide").values()) {
                                maxHeight = Math.max(maxHeight, slide.scrollHeight);
                            }
                            setSlide1Height(maxHeight);
                        }}>
                            <div className={"slide fade" + (slide1 === 0 ? "" : " hidden-slide")}>
                            <img className={"imagefloat-right" + (slide1 === 0 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "qs.png"} alt="Benefits" onClick={() => load(0)} width="550" height="550" />
                                <div className="slide-caption">
                                    <English><h3 id="res-the-enviro">Why should I go solar?</h3></English>
                                    <Albanian><h3 id="res-the-enviro"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <English>Some benefits of using solar energy are the electricity bill savings, more stable power, and a more sustainable business.</English>
                                        <Albanian></Albanian>
                                     
                                    </ul>

                                <h3 id="res-the-envior">Is my business right for solar?</h3>
                                <ul>
                                    <English>It is important to make sure the panels receive the most possible amount of sunlight as Albania already has a high amount of sunshine per year. It is important to determine if your electricity bills are high enough so you can save more with solar.</English>
                                    <Albanian></Albanian>
                                </ul>

                                <h3 id="res-the-envior">How much does solar cost?</h3>
                                <ul>
                                    <English>Energy usage is affected by how much energy is consumed. Solar companies will generate a report of your estimations using the last six months of your energy bills. They will determine the size you need for the system. Be careful not to oversize the system that might increase your costs ineffectively.  </English>
                                    <Albanian></Albanian>
                                </ul>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide1 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 1 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "qs.png"} alt="Benefits" onClick={() => load(0)} width="550" height="550" />
                                <div className="slide-caption">
                                    <English><h3 id="res-sunny-pot">How should I finance my panels?</h3></English>
                                    <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <English>Solar companies may have packages of solar systems they sell. A business may consider taking out a loan to finance the solar photovoltaic system.</English>
                                        <Albanian></Albanian>
                                        
                                    </ul>
                                    <h3 id="res-the-envior">How much money will I save with solar?</h3>
                                <ul>
                                    <English>A solar company would be installing a custom rooftop solar system for your business, so the costs would ideally fit your needs.</English>
                                    <Albanian></Albanian>
                                </ul>

                                <h3 id="res-the-envior">How long will my solar panels last?</h3>
                                <ul>
                                    <English>Solar panels continue to progress in power production and efficiency. Most manufacturers say their panel’s efficiency reduces to 80% over the course of 20-25 years. This reduction is from slight degradation caused by dirt.</English>
                                    <Albanian></Albanian>
                                </ul>
                                </div>
                            </div>

                            <div className={"slide fade" + (slide1 === 2 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 2 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "qs.png"} alt="Benefits" onClick={() => load(0)} width="550" height="550" />
                                <div className="slide-caption">
                                    <English><h3 id="res-sunny-pot">Do solar panels have a warranty?</h3></English>
                                    <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <English>Ask your installer on the warranty of the panels because it depends on both the installers and manufacturers.</English>
                                        <Albanian></Albanian>
                                    </ul>
                                </div>
                            </div>

                            <button type="button" className="slide-prev" onClick={() => setSlide1(((slide1 - 1) % 3+ 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide1((slide1 + 1) % 3)}>&#10095;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide1((slide1 + 1) % 3)}>&#10095;</button>

                        </div>
                        <div className="image-center-centering">
                            <span className={"slide-dot" + (slide1 === 0 ? " active" : "")} onClick={() => setSlide1(0)}></span>
                            <span className={"slide-dot" + (slide1 === 1 ? " active" : "")} onClick={() => setSlide1(1)}></span>
                            <span className={"slide-dot" + (slide1 === 2 ? " active" : "")} onClick={() => setSlide1(2)}></span>

                        </div>
                    </FadeInSection>


                    <FadeInSection id="section-4">
                        <div>
                            <English><h1 className="largerfontb" id="res-why-imp">Contact for more information</h1></English>
                            <Albanian><h1 className="largerfontb" id="res-why-imp"></h1></Albanian>
                        </div>
                        <span id="res-why-imp-content"></span>
                        <div className="slideshow-display" style={{ height: slide1Height }} onLoad={e => {
                            let maxHeight = 0;
                            for (let slide of e.currentTarget.querySelectorAll(".slide").values()) {
                                maxHeight = Math.max(maxHeight, slide.scrollHeight);
                            }
                            setSlide1Height(maxHeight);
                        }}>
                            <div className={"slide fade" + (slide1 === 0 ? "" : " hidden-slide")}>
                            <img className={"imagefloat-right" + (slide1 === 0 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "project1.png"} alt="Project" onClick={() => load(0)} width="320" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-the-enviro">Solar Installers</h3></English>
                                    <Albanian><h3 id="res-the-enviro"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                     <English>Talk to different solar installation companies to determine if and how a solar system is right for your business. Many companies offer technical consulting and full projections of a PV system on the roof.</English>
                                     <Albanian></Albanian>
                                     <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                                    </ul>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide1 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 1 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "project2.png"} alt="Benefits" onClick={() => load(0)} width="320" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-sunny-pot">Banks</h3></English>
                                    <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <English>Talk to different banks to determine if taking out a loan is right for the company. There are banks that offer technical and financial assistance to help you determine if a solar system is right for your business. These banks will often be partnered with solar installation companies they will get you in contact with.</English>
                                        <Albanian></Albanian>
                    

                                        <p> </p>

                                        <English>Ask your local commercial banks for their loan options and solar photovoltaics programs for businesses.</English>
                                        <Albanian></Albanian>


                                    </ul> 
                                </div>
                            </div>

                            <div className={"slide fade" + (slide1 === 2 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 2 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "project3.png"} alt="Benefits" onClick={() => load(0)} width="320" height="450" />
                                <div className="slide-caption">
                                    <English><h3 id="res-sunny-pot">Calculations</h3></English>
                                    <Albanian><h3 id="res-sunny-pot"></h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <English>To determine which of the offers your business is receiving from solar installation companies is the most suitable one, use the app to do your own calculations!</English>
                                        <Albanian></Albanian>
                                    </ul>
                                </div>
                            </div>

                            <button type="button" className="slide-prev" onClick={() => setSlide1(((slide1 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide1((slide1 + 1) % 3)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering">
                            <span className={"slide-dot" + (slide1 === 0 ? " active" : "")} onClick={() => setSlide1(0)}></span>
                            <span className={"slide-dot" + (slide1 === 1 ? " active" : "")} onClick={() => setSlide1(1)}></span>
                            <span className={"slide-dot" + (slide1 === 1 ? " active" : "")} onClick={() => setSlide1(2)}></span>

                        </div>
                    </FadeInSection>

                   
                    
                    
                    
                   
                </div>
            </div>
            <PageFoot></PageFoot>
        </div>
    )
}

export default Resources;

/**
 * The HTML for the table of contents for the Resources page.
 * @returns {HTMLElement} An HTMLElement representing the table of contents, with id "toc".
 */
export function TableOfContents(props) {
    const setSlides = props.setSlides;

    return (
        <div id="toc" className="Hor-flex">
            <ul id="toc-toplist" className="invisible">
                <li><h2>Contents</h2></li>
                <li className="outer-li"><a href="#res-why-imp" onClick={e => jumpTo(e, "res-why-imp")}><English>Why is solar energy important?</English><Albanian>Pse është e rëndësishme energjia diellore?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-why-imp-content" onClick={e => { jumpTo(e, "res-why-imp-content"); setSlides.setSlide1(0); }}><English>The Environment</English><Albanian>Mjedisi</Albanian></a></li>
                        <li><a href="#res-why-imp-content" onClick={e => { jumpTo(e, "res-why-imp-content"); setSlides.setSlide1(1); }}><English>Sunny Potential</English><Albanian>Potencial me diell</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-what-benefits" onClick={e => jumpTo(e, "res-what-benefits")}><English>What are the benefits of solar energy for your business?</English><Albanian>Cilat janë përfitimet e energjisë diellore për biznesin tuaj?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-reduced-costs" onClick={e => { jumpTo(e, "res-reduced-costs") }}><English>Reduced Energy Costs</English><Albanian>Kosto të reduktuara të energjisë</Albanian></a></li>
                        <li><a href="#res-more-security" onClick={e => { jumpTo(e, "res-more-security") }}><English>More Energy Security and Independence</English><Albanian>Më shumë siguri dhe pavarësi energjetike</Albanian></a></li>
                        <li><a href="#res-green-bus" onClick={e => { jumpTo(e, "res-green-bus") }}><English>Green Business</English><Albanian>Biznesi i gjelbër</Albanian></a></li>
                        <li><a href="#res-solar-tax" onClick={e => { jumpTo(e, "res-solar-tax") }}><English>Solar Tax Benefit</English><Albanian>Përfitimi nga taksat diellore</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-go-solar" onClick={e => jumpTo(e, "res-go-solar")}><English>Should your business go solar?</English><Albanian>A duhet të shkojë biznesi juaj diellor?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-why-go-solar" onClick={e => { jumpTo(e, "res-why-go-solar"); }}><English>Why should I go solar?</English><Albanian>Pse duhet të shkoj në diell?</Albanian></a></li>
                        <li><a href="#res-bus-right" onClick={e => { jumpTo(e, "res-bus-right") }}><English>Is my business right for solar?</English><Albanian>A është biznesi im i duhur për energjinë diellore?</Albanian></a></li>
                        <li><a href="#res-how-cost" onClick={e => { jumpTo(e, "res-how-cost") }}><English>How much does solar cost?</English><Albanian>Sa kushton solari?</Albanian></a></li>
                        <li><a href="#res-how-finance" onClick={e => { jumpTo(e, "res-how-finance") }}><English>How should I finance my panels?</English><Albanian>Si duhet të financoj panelet e mia?</Albanian></a></li>
                        <li><a href="#res-how-money" onClick={e => { jumpTo(e, "res-how-money") }}><English>How much money will I save with solar?</English><Albanian>Sa para do të kursej me solar?</Albanian></a></li>
                        <li><a href="#res-how-long" onClick={e => { jumpTo(e, "res-how-long") }}><English>How long will my solar panels last?</English><Albanian>Sa do të zgjasin panelet e mia diellore?</Albanian></a></li>
                        <li><a href="#res-do-panels" onClick={e => { jumpTo(e, "res-do-panels") }}><English>Do solar panels have a warranty?</English><Albanian>A kanë garanci panelet diellore?</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-how-bus" onClick={e => jumpTo(e, "res-how-bus")}><English>How can your business go solar?</English><Albanian>Si mund të shkojë biznesi juaj diellor?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-solar-inst" onClick={e => { jumpTo(e, "res-solar-inst") }}><English>Solar Installers</English><Albanian>Instalues ​​diellor</Albanian></a></li>
                        <li><a href="#res-solar-inst-tir" onClick={e => { jumpTo(e, "res-solar-inst-tir") }}><English>Solar Installers in Tirana</English><Albanian>Instalues ​​Solar ne Tirane</Albanian></a></li>
                        <li><a href="#res-banks" onClick={e => { jumpTo(e, "res-banks") }}><English>Banks</English><Albanian>Bankat</Albanian></a></li>
                        <li><a href="#res-fin-op" onClick={e => { jumpTo(e, "res-fin-op") }}><English>Financing Options</English><Albanian>Opsionet e financimit</Albanian></a></li>
                        <li><a href="#res-own-calc" onClick={e => { jumpTo(e, "res-own-calc") }}><English>Calculations</English><Albanian>Llogaritjet</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-app-permit" onClick={e => jumpTo(e, "res-app-permit")}><English>Applying for a Building Permit</English><Albanian>Aplikimi për Leje Ndërtimi</Albanian></a></li>
                <li className="outer-li"><a href="#res-inst-proc" onClick={e => jumpTo(e, "res-inst-proc")}><English>Solar Photovoltaic Installation Process</English><Albanian>Procesi i instalimit fotovoltaik diellor</Albanian></a></li>
                <li className="outer-li"><a href="#res-fin-sys" onClick={e => jumpTo(e, "res-fin-sys")}><English>How to Finance Your System</English><Albanian>Si të financoni sistemin tuaj</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-cash-pur" onClick={e => { jumpTo(e, "res-cash-pur") }}><English>Cash Purchase</English><Albanian>Blerje me para në dorë</Albanian></a></li>
                        <li><a href="#res-loans" onClick={e => { jumpTo(e, "res-loans") }}><English>Loans</English><Albanian>Kredive</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-bus-success" onClick={e => jumpTo(e, "res-bus-success")}><English>Business Solar Success Story</English><Albanian>Histori Suksesi i Biznesit Solar</Albanian></a></li>
            </ul>
            <button id="toc-access" type="button" onClick={e => {
                e.preventDefault();
                if (e.currentTarget.style.width === "150px" || e.currentTarget.style.width === "") {
                    document.getElementById("toc-toplist").classList.remove("invisible");
                    document.getElementById("toc").style.backgroundColor = "";
                    e.currentTarget.style.width = "440px";
                } else {
                    document.getElementById("toc-toplist").classList.add("invisible");
                    document.getElementById("toc").style.backgroundColor = "transparent";
                    e.currentTarget.style.width = "150px";
                }
            }}>☰ Contents</button>
        </div>
    )
}

function jumpTo(e, id) {
    e.preventDefault();
    for (let sec of document.getElementsByClassName("fade-in-section")) {
        sec.classList.remove("slow");
        sec.classList.add("is-visible");
    }
    const index = document.getElementById(id);
    window.scrollTo({
        left: 0,
        top: index.offsetTop - 85,
        behavior: 'smooth'
    });
    document.getElementById("toc-access").click();
}

/**
 * Headers are in view when table of contents link is pressed
 * https://stackoverflow.com/a/17535094
 */
window.onhashchange = () => {
    window.scrollTo(window.scrollX, window.scrollY - 80);
}

/**
 * Causes each section to fade upon first scrolling to them
 * @param {*} props 
 * @returns An HTMLElement that fades in when first scrolling on screen
 */
function FadeInSection(props) {
    const [isVisible, setVisible] = useState(false);
    const [loadSlow, shouldLoadSlow] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const cur = domRef.current;
        if (cur.classList.contains("is-visible"))
            setVisible(true);
        if (!cur.classList.contains("slow"))
            shouldLoadSlow(false);

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => isVisible || setVisible(entry.isIntersecting));
        });

        observer.observe(cur);

        const bBox = domRef.current.getBoundingClientRect();
        if (bBox.top > 0 && (bBox.bottom < window.innerHeight || document.documentElement.clientHeight)) {
            shouldLoadSlow(true);
        }

        return () => observer.unobserve(cur);
    }, [isVisible]);

    return (
        <div>
            <div ref={domRef} id={props.id}>
                <div className="rounding"></div>
                <div className={`fade-in-section${loadSlow ? ' slow' : ''}${isVisible ? ' is-visible' : ''}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}