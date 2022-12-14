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
    const [slide10Height, setSlide10Height] = useState(0);
    const [slide1, setSlide1] = useState(0);
    const [slide2, setSlide2] = useState(0);
    const [slide3, setSlide3] = useState(0);
    const [slide4, setSlide4] = useState(0);
    const [slide5, setSlide5] = useState(0);
    const [slide6, setSlide6] = useState(0);
    const [slide7, setSlide7] = useState(0);
    const [slide10, setSlide10] = useState(0);

    const [showToTop, setShowToTop] = useState(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    window.addEventListener("scroll", e => {
        setShowToTop(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    });

    const [albanian, setAlbanian] = useState(settings.albanianVisible.getState());
    settings.albanianVisible.addListener(visible => {
        setAlbanian(visible);
    });
    /**
     * Loads an image into the modal popup and displays the modal
     * @param {number} num An index representing which image to load
     */
    const load = (num, num2 = -1) => {
        document.body.style.overflowY = "hidden";
        if (num2 !== -1) {
            const img1 = document.getElementById(`img${num}`);
            const img2 = document.getElementById(`img${num2}`);
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

    //Sections without images do not call onLoad, so they are handled here instead
    useEffect(() => {
        let maxHeight = 0;
        for (let slide of document.getElementById("section-2").querySelectorAll(".slide").values()) {
            maxHeight = Math.max(maxHeight, slide.scrollHeight);
        }
        setSlide2Height(maxHeight);

        maxHeight = 0;
        for (let slide of document.getElementById("section-7").querySelectorAll(".slide").values()) {
            maxHeight = Math.max(maxHeight, slide.scrollHeight);
        }
        setSlide7Height(maxHeight);
    }, []);

    /**
     * Updates the height of a slideshow to be the height of the largest slide
     * @param {*} e A react onClick mouseEvent
     * @param {*} setHeight A function which sets the height for the slide wrapper
     */
    const setNthSlideHeight = (target, setHeight) => {
        let maxHeight = 0;
        for (let slide of target.querySelectorAll(".slide").values()) {
            maxHeight = Math.max(maxHeight, slide.scrollHeight);
        }
        setHeight(maxHeight);
    }

    window.addEventListener("resize", () => {
        setSlide1Height(0);
        setSlide2Height(0);
        setSlide3Height(0);
        setSlide4Height(0);
        setSlide5Height(0);
        setSlide6Height(0);
        setSlide7Height(0);
        setSlide10Height(0);
        setTimeout(() => {
        setNthSlideHeight(document.getElementById("section-1").querySelector(".slideshow-display"), setSlide1Height);
        setNthSlideHeight(document.getElementById("section-2").querySelector(".slideshow-display"), setSlide2Height);
        setNthSlideHeight(document.getElementById("section-3").querySelector(".slideshow-display"), setSlide3Height);
        setNthSlideHeight(document.getElementById("section-4").querySelector(".slideshow-display"), setSlide4Height);
        setNthSlideHeight(document.getElementById("section-5").querySelector(".slideshow-display"), setSlide5Height);
        setNthSlideHeight(document.getElementById("section-6").querySelector(".slideshow-display"), setSlide6Height);
        setNthSlideHeight(document.getElementById("section-7").querySelector(".slideshow-display"), setSlide7Height);
        setNthSlideHeight(document.getElementById("section-10").querySelector(".slideshow-display"), setSlide10Height);
        }, 0);
    });

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
                    setSlide10: setSlide10
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
                <div id="actual-content">
                    <FadeInSection className="odd-section first" id="section-1">
                        <div id="res-why-imp">
                            <English><h1 className="largerfontb">Impacts of Solar Energy</h1></English>
                            <Albanian><h1 className="largerfontb">Ndikimet e Energjisë Diellore</h1></Albanian>
                        </div>
                        <span id="res-why-imp-content"></span>
                        <div className="slideshow-display" style={{ height: slide1Height }} onLoad={e => setNthSlideHeight(e.currentTarget, setSlide1Height)}>
                            <div className={"slide fade" + (slide1 === 0 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 0 ? "" : " hidden-slide")} id="img0" src={process.env.PUBLIC_URL + "mitigateclimatechange.png"} alt={albanian ? "Zbutja e ndryshimeve klimatike" : "Mitigating Climate Change"} onClick={() => load(0)} width="450" height="450" />
                                <div className="slide-caption" id="res-the-enviro">
                                    <English><h3>Helps mitigate climate change</h3></English>
                                    <Albanian><h3>Ndihmon në zbutjen e ndryshimeve klimatike</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Albania’s power generation mainly comes from hydropower.</English>
                                            <Albanian>Prodhimi i energjisë në Shqipëri vjen kryesisht nga hidrocentralet.</Albanian>
                                        </li>
                                        <li>
                                            <English>Hydropower is becoming less reliable due to climate change.</English>
                                            <Albanian>Energjia hidrike po bëhet më pak e besueshme për shkak të ndryshimeve klimatike.</Albanian>
                                        </li>
                                        <li>
                                            <English>This means Albania is importing a lot of energy from other countries.</English>
                                            <Albanian>Kjo do të thotë se Shqipëria po importon shumë energji nga vende të tjera.</Albanian>
                                        </li>
                                        <li>
                                            <English>Using solar energy can help reduce the reliance on fossil fuels such as coal, natural gas, and oil.</English>
                                            <Albanian>Përdorimi i energjisë diellore mund të ndihmojë në uljen e varësisë nga lëndët djegëse fosile si qymyri, gazi natyror dhe nafta.</Albanian>
                                        </li>
                                        <li>
                                            <English>This helps reduce the emission of harmful greenhouse gasses to the atmosphere.</English>
                                            <Albanian>Kjo ndihmon në reduktimin e emetimit të gazeve të dëmshme serrë në atmosferë.</Albanian>
                                        </li>
                                        <li>
                                            <English>Therefore providing better air quality for us!</English>
                                            <Albanian>Prandaj siguroni cilësi më të mirë të ajrit për ne!</Albanian>
                                        </li>
                                    </ul>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide1 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide1 === 1 ? "" : " hidden-slide")} id="img1" src={process.env.PUBLIC_URL + "solarmap.png"} alt={albanian ? "Rrezatimi diellor i Shqipërisë" : "Solar irradiation of Albania"} onClick={() => load(1)} width="360" height="450" />
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
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide1 === 0 ? " active" : "")} onClick={() => setSlide1(0)}></span>
                            <span className={"slide-dot" + (slide1 === 1 ? " active" : "")} onClick={() => setSlide1(1)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="even-section" id="section-2">
                        <div id="res-myths">
                            <English><h1 className="largerfontb">Solar myths and misconceptions</h1></English>
                            <Albanian><h1 className="largerfontb">Mitet diellore dhe keqkuptimet</h1></Albanian>
                        </div>
                        <span id="res-myths-content"></span>
                        <div className="slideshow-display" style={{ height: slide2Height }}>
                            <div className={"slide fade" + (slide2 === 0 ? "" : " hidden-slide")}>
                                <div className="slide-caption" id="res-myth1">
                                    <English><h3>Myth #1: Solar only works when the sun is shining. I still need power when it’s raining.</h3></English>
                                    <Albanian><h3>Miti #1: Dielli funksionon vetëm kur dielli shkëlqen. Unë ende kam nevojë për energji kur bie shi.</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Solar panels collect light, not heat. Solar technology can work in almost any condition. Even on rainy and snowy days because some sunlight still reaches the earth.</English>
                                        <Albanian>Panelet diellore mbledhin dritë, jo nxehtësi. Teknologjia diellore mund të funksionojë pothuajse në çdo kusht. Edhe në ditët me shi dhe borë, sepse një pjesë e dritës së diellit ende arrin në tokë.</Albanian>
                                    </div>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide2 === 1 ? "" : " hidden-slide")}>
                                <div className="slide-caption" id="res-myth2">
                                    <English><h3>Myth #2: Solar panels aren’t efficient enough.</h3></English>
                                    <Albanian><h3>Miti #2: Panelet diellore nuk janë mjaftueshëm efikas.</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Most solar panels that are cost-effective for business solar systems have efficiency rates of around 20%. This means that 20% of the sunlight reflected on the panel is turned into electricity. Some of the remaining sunlight is reflected off the panel or turned into heat.</English>
                                        <Albanian>Shumica e paneleve diellore që janë me kosto efektive për sistemet diellore të biznesit kanë norma efikasiteti prej rreth 20%. Kjo do të thotë që 20% e dritës së diellit të reflektuar në panel kthehet në energji elektrike. Një pjesë e dritës së diellit të mbetur reflektohet nga paneli ose shndërrohet në nxehtësi.</Albanian>
                                    </div>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide2 === 2 ? "" : " hidden-slide")}>
                                <div className="slide-caption" id="res-myth3">
                                    <English><h3>Myth #3: Solar is too expensive.</h3></English>
                                    <Albanian><h3>Miti #3: Dielli është shumë i shtrenjtë.</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>The whole solar photovoltaic system can be paid at the time of installation. However, there are other solar financing options that allow you to pay over time.</English>
                                        <Albanian>I gjithë sistemi fotovoltaik diellor mund të paguhet në momentin e instalimit. Megjithatë, ka mundësi të tjera financimi diellor që ju lejojnë të paguani me kalimin e kohës.</Albanian>
                                    </div>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide2(((slide2 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide2((slide2 + 1) % 3)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide2 === 0 ? " active" : "")} onClick={() => setSlide2(0)}></span>
                            <span className={"slide-dot" + (slide2 === 1 ? " active" : "")} onClick={() => setSlide2(1)}></span>
                            <span className={"slide-dot" + (slide2 === 2 ? " active" : "")} onClick={() => setSlide2(2)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="odd-section" id="section-3">
                        <div id="res-benefits">
                            <English><h1 className="largerfontb">The benefits of solar energy for your business</h1></English>
                            <Albanian><h1 className="largerfontb">Përfitimet e energjisë diellore për biznesin tuaj</h1></Albanian>
                        </div>
                        <span id="res-benefits-content"></span>
                        <div className="slideshow-display" style={{ height: slide3Height }} onLoad={e => setNthSlideHeight(e.currentTarget, setSlide3Height)}>
                            <div className={"slide fade" + (slide3 === 0 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide3 === 0 ? "" : " hidden-slide")} id="img2" src={process.env.PUBLIC_URL + "why1.png"} alt={albanian ? "Pse të instaloni? (1)" : "Why install? (1)"} onClick={() => load(2)} width="450" height="450" />
                                <div className="slide-caption" id="res-reduced-costs">
                                    <English><h3>Reduce Energy Costs</h3></English>
                                    <Albanian><h3>Ulja e kostove të energjisë</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Electricity bills depend on how much energy is consumed and the rate a utility company charges.</English>
                                            <Albanian>Faturat e energjisë elektrike varen nga sasia e energjisë së konsumuar dhe tarifa që ngarkon një kompani e shërbimeve.</Albanian>
                                        </li>
                                        <li>
                                            <English>Utility companies face high costs to maintain and expand the grid. That makes electricity bills more expensive.</English>
                                            <Albanian>Kompanitë e shërbimeve publike përballen me kosto të larta për të mirëmbajtur dhe zgjeruar rrjetin. Kjo i bën faturat e energjisë elektrike më të shtrenjta.</Albanian>
                                        </li>
                                        <li>
                                            <English>Businesses can avoid electricity price increases by switching to solar!</English>
                                            <Albanian>Bizneset mund të shmangin rritjen e çmimit të energjisë elektrike duke kaluar në solare!</Albanian>
                                        </li>
                                    </ul>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide3 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide3 === 1 ? "" : " hidden-slide")} id="img3" src={process.env.PUBLIC_URL + "why2.png"} alt={albanian ? "Pse të instaloni? (2)" : "Why install? (2)"} onClick={() => load(3)} width="450" height="450" />
                                <div className="slide-caption" id="res-energy-sec">
                                    <English><h3>Increased Energy Security and Independence</h3></English>
                                    <Albanian><h3>Rritja e Sigurisë dhe Pavarësisë së Energjisë</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Businesses become their own power provider.</English>
                                            <Albanian>Bizneset bëhen furnizuesi i tyre i energjisë.</Albanian>
                                        </li>
                                        <li>
                                            <English>Costs of using solar are very predictable.</English>
                                            <Albanian>Kostot e përdorimit të diellit janë shumë të parashikueshme.</Albanian>
                                        </li>
                                        <li>
                                            <English>Businesses don't have to rely on an undependable grid.</English>
                                            <Albanian>Bizneset nuk duhet të mbështeten në një rrjet të pasigurt.</Albanian>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide3 === 2 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide3 === 2 ? "" : " hidden-slide")} id="img4" src={process.env.PUBLIC_URL + "why3.png"} alt={albanian ? "Pse të instaloni? (3)" : "Why install? (3)"} onClick={() => load(4)} width="450" height="450" />
                                <div className="slide-caption" id="res-green-bus">
                                    <English><h3>Green Business</h3></English>
                                    <Albanian><h3>Biznesi i Gjelbër</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <ul>
                                        <li>
                                            <English>Going green saves money through energy efficiency.</English>
                                            <Albanian>Përdorimi i gjelbër kursen para përmes efikasitetit të energjisë.</Albanian>
                                        </li>
                                        <li>
                                            <English>Going green helps the environment by cutting greenhouse gas emissions.</English>
                                            <Albanian>Të jesh i gjelbër ndihmon mjedisin duke ulur emetimet e gazeve serrë.</Albanian>
                                        </li>
                                        <li>
                                            <English>Going green reduces costs.</English>
                                            <Albanian>Të jesh i gjelbër ul kostot.</Albanian>
                                        </li>
                                        <li>
                                            <English>Going green enhances a company's reputation.</English>
                                            <Albanian>Përdorimi i gjelbër rrit reputacionin e një kompanie.</Albanian>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide3(((slide3 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide3((slide3 + 1) % 3)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide3 === 0 ? " active" : "")} onClick={() => setSlide3(0)}></span>
                            <span className={"slide-dot" + (slide3 === 1 ? " active" : "")} onClick={() => setSlide3(1)}></span>
                            <span className={"slide-dot" + (slide3 === 2 ? " active" : "")} onClick={() => setSlide3(2)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="even-section" id="section-4">
                        <div id="res-should-solar">
                            <English><h1 className="largerfontb">Should your business go solar?</h1></English>
                            <Albanian><h1 className="largerfontb">A duhet që biznesi juaj të shkojë diellor?</h1></Albanian>
                        </div>
                        <span id="res-should-solar-content"></span>
                        <div className="slideshow-display" style={{ height: slide4Height }} onLoad={e => setNthSlideHeight(e.currentTarget, setSlide4Height)}>
                            <div className={"slide fade" + (slide4 === 0 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide4 === 0 ? "" : " hidden-slide")} id="img5" src={process.env.PUBLIC_URL + "qs.png"} alt={albanian ? "Pyetje përpara se të investoni" : "Questions before investing"} onClick={() => load(5)} width="550" height="550" />
                                <div className="slide-caption" id="res-why-solar">
                                    <English><h3>Why should I go solar?</h3></English>
                                    <Albanian><h3>Pse duhet të shkoj në diell?</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Some benefits of using solar energy are the electricity bill savings, more stable power, and a more sustainable business.</English>
                                        <Albanian>Disa përfitime të përdorimit të energjisë diellore janë kursimi i faturave të energjisë elektrike, energjia më e qëndrueshme dhe një biznes më i qëndrueshëm.</Albanian>
                                    </div>
                                    <div>
                                        <English><h3>Is solar right for my business?</h3></English>
                                        <Albanian><h3>A është solari i duhur për biznesin tim?</h3></Albanian>
                                    </div>
                                    <div>
                                        <English>It is important to make sure the panels receive the most possible amount of sunlight as Albania already has a high amount of sunshine per year. It is important to determine if your electricity bills are high enough so you can save more with solar.</English>
                                        <Albanian>Është e rëndësishme të siguroheni që panelet të marrin sasinë më të madhe të mundshme të dritës së diellit pasi Shqipëria tashmë ka një sasi të lartë dielli në vit. Është e rëndësishme të përcaktoni nëse faturat tuaja të energjisë elektrike janë mjaft të larta, në mënyrë që të kurseni më shumë me energjinë diellore.</Albanian>
                                    </div>
                                    <div>
                                        <English><h3>How much does solar cost?</h3></English>
                                        <Albanian><h3>Sa kushton solari?</h3></Albanian>
                                    </div>
                                    <div>
                                        <English>Energy usage is affected by how much energy is consumed. Solar companies will generate a report of your estimations using the last six months of your energy bills. They will determine the size you need for the system. Be careful not to oversize the system that might increase your costs ineffectively.</English>
                                        <Albanian>Përdorimi i energjisë ndikohet nga sasia e energjisë së konsumuar. Kompanitë diellore do të gjenerojnë një raport të vlerësimeve tuaja duke përdorur gjashtë muajt e fundit të faturave tuaja të energjisë. Ata do të përcaktojnë madhësinë që ju nevojitet për sistemin. Kini kujdes që të mos e teproni sistemin që mund të rrisë kostot tuaja në mënyrë joefektive.</Albanian>
                                    </div>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide4 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide4 === 1 ? "" : " hidden-slide")} id="img6" src={process.env.PUBLIC_URL + "qs.png"} alt={albanian ? "Pyetje përpara se të investoni" : "Questions before investing"} onClick={() => load(6)} width="550" height="550" />
                                <div className="slide-caption" id="res-how-financing">
                                    <English><h3>How should I finance my panels?</h3></English>
                                    <Albanian><h3>Si duhet të financoj panelet e mia?</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Solar companies may have packages of solar systems they sell. A business may consider taking out a loan to finance the solar photovoltaic system.</English>
                                        <Albanian>Kompanitë diellore mund të kenë paketa të sistemeve diellore që shesin. Një biznes mund të marrë në konsideratë marrjen e një kredie për të financuar sistemin fotovoltaik diellor.</Albanian>
                                    </div>
                                    <div>
                                        <English><h3>How much money will I save with solar?</h3></English>
                                        <Albanian><h3>Sa para do të kursej me solar?</h3></Albanian>
                                    </div>
                                    <div>
                                        <English>A solar company would be installing a custom rooftop solar system for your business, so the costs would ideally fit your needs.</English>
                                        <Albanian>Një kompani diellore do të instalonte një sistem diellor me porosi në çati për biznesin tuaj, kështu që kostot do të përshtateshin në mënyrë ideale me nevojat tuaja.</Albanian>
                                    </div>
                                    <div>
                                        <English><h3>How long will my solar panels last?</h3></English>
                                        <Albanian><h3>Sa kohë do të zgjasin panelet e mia diellore?</h3></Albanian>
                                    </div>
                                    <div>
                                        <English>Solar panels continue to progress in power production and efficiency. Most manufacturers say their panel’s efficiency reduces to 80% over the course of 20-25 years. This reduction is from slight degradation caused by dirt.</English>
                                        <Albanian>Panelet diellore vazhdojnë të përparojnë në prodhimin dhe efikasitetin e energjisë. Shumica e prodhuesve thonë se efikasiteti i panelit të tyre zvogëlohet në 80% gjatë 20-25 viteve. Ky reduktim vjen nga degradimi i lehtë i shkaktuar nga papastërtia.</Albanian>
                                    </div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide4 === 2 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide4 === 2 ? "" : " hidden-slide")} id="img7" src={process.env.PUBLIC_URL + "qs.png"} alt={albanian ? "Pyetje përpara se të investoni" : "Questions before investing"} onClick={() => load(7)} width="550" height="550" />
                                <div className="slide-caption" id="res-warranty">
                                    <English><h3>Do solar panels have a warranty?</h3></English>
                                    <Albanian><h3>A kanë garanci panelet diellore?</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Ask your installer on the warranty of the panels because it depends on both the installers and manufacturers.</English>
                                        <Albanian>Pyesni instaluesin tuaj për garancinë e paneleve sepse kjo varet si nga instaluesit ashtu edhe nga prodhuesit.</Albanian>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide4(((slide4 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide4((slide4 + 1) % 3)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide4 === 0 ? " active" : "")} onClick={() => setSlide4(0)}></span>
                            <span className={"slide-dot" + (slide4 === 1 ? " active" : "")} onClick={() => setSlide4(1)}></span>
                            <span className={"slide-dot" + (slide4 === 2 ? " active" : "")} onClick={() => setSlide4(2)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="odd-section" id="section-5">
                        <div id="res-contact">
                            <English><h1 className="largerfontb">Contact for more information</h1></English>
                            <Albanian><h1 className="largerfontb">Kontaktoni për më shumë informacion</h1></Albanian>
                        </div>
                        <span id="res-contact-content"></span>
                        <div className="slideshow-display" style={{ height: slide5Height }} onLoad={e => setNthSlideHeight(e.currentTarget, setSlide5Height)}>
                            <div className={"slide fade" + (slide5 === 0 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide5 === 0 ? "" : " hidden-slide")} id="img8" src={process.env.PUBLIC_URL + "project1.png"} alt={albanian ? "Fillimi i një projekti diellor (1)" : "Starting a solar project (1)"} onClick={() => load(8)} width="320" height="450" />
                                <div className="slide-caption" id="res-installers">
                                    <English><h3>Solar Installers</h3></English>
                                    <Albanian><h3>Instalues ​​diellor</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Talk to different solar installation companies to determine if and how a solar system is right for your business. Many companies offer technical consulting and full projections of a PV system on the roof.</English>
                                        <Albanian>Bisedoni me kompani të ndryshme instalimi diellor për të përcaktuar nëse dhe si një sistem diellor është i duhuri për biznesin tuaj. Shumë kompani ofrojnë konsulencë teknike dhe projeksione të plota të një sistemi PV në çati.</Albanian>
                                    </div>
                                    <div>
                                        <English><h3>Map of solar installers near Tirana</h3></English>
                                        <Albanian><h3>Harta e instaluesve diellorë pranë Tiranës</h3></Albanian>
                                    </div>
                                    <iframe id="solar-map" title="Map of solar companies in Tirana" src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d47942.37394858916!2d19.7906942!3d41.32195!3m2!1i1024!2i768!4f13.1!2m1!1ssolar%20companies!5e0!3m2!1sen!2s!4v1667231658526!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide5 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide5 === 1 ? "" : " hidden-slide")} id="img9" src={process.env.PUBLIC_URL + "project2.png"} alt={albanian ? "Fillimi i një projekti diellor (2)" : "Starting a solar project (2)"} onClick={() => load(9)} width="320" height="450" />
                                <div className="slide-caption" id="res-banks">
                                    <English><h3>Banks</h3></English>
                                    <Albanian><h3>Bankat</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Talk to different banks to determine if taking out a loan is right for the company. There are banks that offer technical and financial assistance to help you determine if a solar system is right for your business. These banks will often be partnered with solar installation companies they will get you in contact with.</English>
                                        <Albanian>Bisedoni me banka të ndryshme për të përcaktuar nëse marrja e një kredie është e drejtë për kompaninë. Ka banka që ofrojnë asistencë teknike dhe financiare për t'ju ndihmuar të përcaktoni nëse një sistem diellor është i duhuri për biznesin tuaj. Këto banka shpesh do të jenë partnere me kompanitë e instalimit diellor me të cilat do t'ju kontaktojnë.</Albanian>
                                        <br />
                                        <English>Ask your local commercial banks for their loan options and solar photovoltaics programs for businesses.</English>
                                        <Albanian>Pyesni bankat tuaja tregtare lokale për opsionet e tyre të kredisë dhe programet e fotovoltaikëve diellorë për bizneset.</Albanian>
                                    </div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide5 === 2 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide5 === 2 ? "" : " hidden-slide")} id="img10" src={process.env.PUBLIC_URL + "project3.png"} alt={albanian ? "Fillimi i një projekti diellor (3)" : "Starting a solar project (3)"} onClick={() => load(10)} width="320" height="450" />
                                <div className="slide-caption" id="res-calculations">
                                    <English><h3>Calculations</h3></English>
                                    <Albanian><h3>Llogaritjet</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>To determine which of the offers your business is receiving from solar installation companies is the most suitable one, use the app to do your own calculations!</English>
                                        <Albanian>Për të përcaktuar se cila nga ofertat që merr biznesi juaj nga kompanitë e instalimit diellor është më e përshtatshme, përdorni aplikacionin për të bërë llogaritjet tuaja!</Albanian>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide5(((slide5 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide5((slide5 + 1) % 3)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide5 === 0 ? " active" : "")} onClick={() => setSlide5(0)}></span>
                            <span className={"slide-dot" + (slide5 === 1 ? " active" : "")} onClick={() => setSlide5(1)}></span>
                            <span className={"slide-dot" + (slide5 === 2 ? " active" : "")} onClick={() => setSlide5(2)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="even-section" id="section-6">
                        <div id="res-financing">
                            <English><h1 className="largerfontb">Financing Your System</h1></English>
                            <Albanian><h1 className="largerfontb">Financimi i sistemit tuaj</h1></Albanian>
                        </div>
                        <span id="res-financing-content"></span>
                        <div className="slideshow-display" style={{ height: slide6Height }} onLoad={e => setNthSlideHeight(e.currentTarget, setSlide6Height)}>
                            <div className={"slide fade" + (slide6 === 0 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide6 === 0 ? "" : " hidden-slide")} id="img11" src={process.env.PUBLIC_URL + "howtofinance.png"} alt={albanian ? "Si të financoni një sistem PV" : "How to finance a PV system"} onClick={() => load(11)} width="450" height="450" />
                                <div className="slide-caption" id="res-cash">
                                    <English><h3>Cash</h3></English>
                                    <Albanian><h3>Paratë e gatshme</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>The whole system can be paid up front with cash so that savings start immediately. This simplifies the process because there is no application, approval, or repayments. Paying with cash is cheaper than taking out a loan, and the payback period is a lot quicker. Going solar is a large investment though.</English>
                                        <Albanian>I gjithë sistemi mund të paguhet paraprakisht me para në dorë në mënyrë që kursimet të fillojnë menjëherë. Kjo thjeshton procesin sepse nuk ka asnjë aplikim, miratim ose shlyerje. Pagesa me para në dorë është më e lirë se marrja e një kredie dhe periudha e shlyerjes është shumë më e shpejtë. Megjithatë, përdorimi i energjisë diellore është një investim i madh.</Albanian>
                                    </div>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide6 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide6 === 1 ? "" : " hidden-slide")} id="img12" src={process.env.PUBLIC_URL + "howtofinance.png"} alt={albanian ? "Si të financoni një sistem PV" : "How to finance a PV system"} onClick={() => load(12)} width="450" height="450" />
                                <div className="slide-caption" id="res-loan">
                                    <English><h3>Loan</h3></English>
                                    <Albanian><h3>Kredi</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <English>The system can be paid with a loan from a secondary bank or business vendor. The payback period is longer than paying with cash because of the interest rate. There are banks that offer competitive interest rates for PV investments. It is a longer process because there is an application.</English>
                                    <Albanian>Sistemi mund të paguhet me një kredi nga një bankë dytësore ose shitës biznesi. Periudha e shlyerjes është më e gjatë se pagimi me para në dorë për shkak të normës së interesit. Ka banka që ofrojnë norma interesi konkurruese për investimet FV. Është një proces më i gjatë sepse ka një aplikim.</Albanian>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide6 === 2 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide6 === 2 ? "" : " hidden-slide")} id="img13" src={process.env.PUBLIC_URL + "howtofinance.png"} alt={albanian ? "Si të financoni një sistem PV" : "How to finance a PV system"} onClick={() => load(13)} width="450" height="450" />
                                <div className="slide-caption" id="res-calculations">
                                    <English><h3>Grants</h3></English>
                                    <Albanian><h3>Grantet</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Your business can apply for the SME Competitiveness Programme, a grant by the EBRD and EU that provides a 15% grant on any investment that may help a business meet EU directives. </English>
                                        <Albanian>Biznesi juaj mund të aplikojë për Programin e Konkurrueshmërisë së SME-ve, një grant nga EBRD dhe EU që ofron një grant prej 15% për çdo investim që mund të ndihmojë një biznes të përmbushë direktivat e EU-së.</Albanian>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide6(((slide6 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide6((slide6 + 1) % 3)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide6 === 0 ? " active" : "")} onClick={() => setSlide6(0)}></span>
                            <span className={"slide-dot" + (slide6 === 1 ? " active" : "")} onClick={() => setSlide6(1)}></span>
                            <span className={"slide-dot" + (slide6 === 2 ? " active" : "")} onClick={() => setSlide6(2)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="odd-section" id="section-7">
                        <div id="res-choose-inst">
                            <English><h1 className="largerfontb">Choosing the right solar installer</h1></English>
                            <Albanian><h1 className="largerfontb">Zgjedhja e instaluesit të duhur diellor</h1></Albanian>
                        </div>
                        <span id="res-choose-inst-content"></span>
                        <div className="slideshow-display" style={{ height: slide7Height }}>
                            <div className={"slide fade" + (slide7 === 0 ? "" : " hidden-slide")}>
                                <div className="slide-caption" id="res-cred-exp">
                                    <English><h3>Credibility and Expertise</h3></English>
                                    <Albanian><h3>Besueshmëria dhe Ekspertiza</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Your solar installer should have experience for installing solar equipment and is knowledgeable about the process. They should be able to explain the solar incentives your business is eligible for and the warranty coverage.</English>
                                        <Albanian>Instaluesi juaj diellor duhet të ketë përvojë në instalimin e pajisjeve diellore dhe të ketë njohuri për procesin. Ata duhet të jenë në gjendje të shpjegojnë stimujt diellorë për të cilët kualifikohet biznesi juaj dhe mbulimin e garancisë.</Albanian>
                                    </div>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide7 === 1 ? "" : " hidden-slide")}>
                                <div className="slide-caption" id="res-transparency">
                                    <English><h3>Transparency</h3></English>
                                    <Albanian><h3>Transparenca</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <English>Your installer should be direct and honest about the installation process and available to answer your questions. </English>
                                    <Albanian>Instaluesi juaj duhet të jetë i drejtpërdrejtë dhe i sinqertë në lidhje me procesin e instalimit dhe i disponueshëm për t'iu përgjigjur pyetjeve tuaja.</Albanian>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide7 === 2 ? "" : " hidden-slide")}>
                                <div className="slide-caption" id="res-rep-test">
                                    <English><h3>Reputation and Testimonials</h3></English>
                                    <Albanian><h3>Reputacioni dhe dëshmitë</h3></Albanian>
                                </div>
                                <div className="content-pane">
                                    <div>
                                        <English>Read online reviews from installers’ past customers and talk to their previous clients who would share their experiences with the installation process. It can also be helpful to talk to other businesses you know who have thought about going or gone solar to find out what they’ve learned from their experiences.</English>
                                        <Albanian>Lexoni komentet në internet nga klientët e kaluar të instaluesve dhe bisedoni me klientët e tyre të mëparshëm të cilët do të ndajnë përvojat e tyre me procesin e instalimit. Mund të jetë gjithashtu e dobishme të flisni me biznese të tjera që njihni, të cilët kanë menduar të shkojnë ose të shkojnë në diell për të zbuluar se çfarë kanë mësuar nga përvojat e tyre.</Albanian>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide7(((slide7 - 1) % 3 + 3) % 3)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide7((slide7 + 1) % 3)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide7 === 0 ? " active" : "")} onClick={() => setSlide7(0)}></span>
                            <span className={"slide-dot" + (slide7 === 1 ? " active" : "")} onClick={() => setSlide7(1)}></span>
                            <span className={"slide-dot" + (slide7 === 2 ? " active" : "")} onClick={() => setSlide7(2)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="even-section" id="section-8">
                        <div id="res-panel-types">
                            <English><h1 className="largerfontb">Different types of panels</h1></English>
                            <Albanian><h1 className="largerfontb">Lloje të ndryshme panelesh</h1></Albanian>
                        </div>
                        <div className="static-display">
                            <div id="res-monocr">
                                <English><h3>Monocrystalline</h3></English>
                                <Albanian><h3>Monokristale</h3></Albanian>
                            </div>
                            <ul>
                                <li>
                                    <English>Have higher efficiencies.</English>
                                    <Albanian>Kanë efikasitet më të lartë.</Albanian>
                                </li>
                                <li>
                                    <English>Will need less panels for the roof to produce more electricity than other types of panels. </English>
                                    <Albanian>Do të duhen më pak panele për çatinë për të prodhuar më shumë energji elektrike sesa llojet e tjera të paneleve.</Albanian>
                                </li>
                                <li>
                                    <English>They are more expensive per panel.</English>
                                    <Albanian>Ato janë më të shtrenjta për panel.</Albanian>
                                </li>
                                <li>
                                    <English>Have a black hue.</English>
                                    <Albanian>Keni një nuancë të zezë.</Albanian>
                                </li>
                            </ul>
                            <div id="res-polycr">
                                <English><h3>Polycrystalline</h3></English>
                                <Albanian><h3>Polikristaline</h3></Albanian>
                            </div>
                            <ul>
                                <li>
                                    <English>Have lower efficiencies than monocrystalline panels.</English>
                                    <Albanian>Kanë efikasitet më të ulët se panelet monokristaline.</Albanian>
                                </li>
                                <li>
                                    <English>Will need more panels to provide electricity.</English>
                                    <Albanian>Do të duhen më shumë panele për të siguruar energji elektrike.</Albanian>
                                </li>
                                <li>
                                    <English>The cost is lower.</English>
                                    <Albanian>Kostoja është më e ulët.</Albanian>
                                </li>
                                <li>
                                    <English>Have a blue hue.</English>
                                    <Albanian>Keni një nuancë blu.</Albanian>
                                </li>
                            </ul>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="odd-section" id="section-9">
                        <div id="res-apply-perm">
                            <English><h1 className="largerfontb">Applying for a Building Permit</h1></English>
                            <Albanian><h1 className="largerfontb">Aplikimi për Leje Ndërtimi</h1></Albanian>
                        </div>
                        <div className="static-display">
                            <div>
                                <English>When starting a private project, a business must hire an electrical engineer with a license that covers a solar photovoltaics specialty to develop it. The developed project that includes an explanation of the whole plan is then signed by the business.</English>
                                <Albanian>Kur fillon një projekt privat, një biznes duhet të punësojë një inxhinier elektrik me një licencë që mbulon një specialitet të fotovoltaikëve diellorë për ta zhvilluar atë. Projekti i zhvilluar që përfshin një shpjegim të të gjithë planit më pas nënshkruhet nga biznesi.</Albanian>
                            </div>
                            <br />
                            <div>
                                <English>The business is then partnered with a firm to start the permit application process. The firm goes to E-Permit at E-Albania and fills out the permit, Deklarate Paraprake. The permit will have all the information the business and the lawyer need, including the municipality fee that is charged for the project being checked. This fee is dependent on municipality taxes.</English>
                                <Albanian>Biznesi më pas bëhet partner me një firmë për të filluar procesin e aplikimit për leje. Firma shkon në E-Permit në E-Albania dhe plotëson lejen, Deklarate Paraprake. Leja do të ketë të gjithë informacionin që i duhen biznesit dhe avokatit, duke përfshirë tarifën e bashkisë që ngarkohet për projektin që kontrollohet. Kjo tarifë varet nga taksat komunale.</Albanian>
                            </div>
                            <br />
                            <div>
                                <English>The next step is to apply for the permit and the application is sent to the municipality who will accept it or deny it.</English>
                                <Albanian>Hapi tjetër është aplikimi për lejen dhe aplikimi i dërgohet bashkisë e cila do ta pranojë ose refuzojë.</Albanian>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="even-section" id="section-10">
                        <div id="res-inst-proc">
                            <English><h1 className="largerfontb">The Day of Installment</h1></English>
                            <Albanian><h1 className="largerfontb">Dita e Këstit</h1></Albanian>
                        </div>
                        <span id="res-inst-proc-content"></span>
                        <div className="slideshow-display" style={{ height: slide10Height }} onLoad={e => setNthSlideHeight(e.currentTarget, setSlide10Height)}>
                            <div className={"slide fade" + (slide10 === 0 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide10 === 0 ? "" : " hidden-slide")} id="img14" src={process.env.PUBLIC_URL + "PVInstallationProcess.png"} alt={albanian ? "Procesi i instalimit" : "Installation Process"} onClick={() => load(14)} width="200" height="430" />
                                <div className="content-pane">
                                    <ol>
                                        <li>
                                            <English>Determine if a solar photovoltaic system is right for your business financially.</English>
                                            <Albanian>Përcaktoni nëse një sistem diellor fotovoltaik është i duhuri për biznesin tuaj financiarisht.</Albanian>
                                        </li>
                                        <li>
                                            <English>Experts will determine the system size needed and plan the layout of the installation. Be careful not to oversize the system that might increase your costs ineffectively.</English>
                                            <Albanian>Ekspertët do të përcaktojnë madhësinë e nevojshme të sistemit dhe do të planifikojnë paraqitjen e instalimit. Kini kujdes që të mos e teproni sistemin që mund të rrisë kostot tuaja në mënyrë joefektive.</Albanian>
                                        </li>
                                        <li>
                                            <English>On installation day, installers will set up their equipment and scaffolding.</English>
                                            <Albanian>Në ditën e instalimit, instaluesit do të vendosin pajisjet dhe skelat e tyre.</Albanian>
                                        </li>
                                        <li>
                                            <English>Panel mounts are installed to ensure system stability and are positioned to ensure maximum sunlight exposure.</English>
                                            <Albanian>Montimet e paneleve janë instaluar për të siguruar stabilitetin e sistemit dhe janë të pozicionuara për të siguruar ekspozimin maksimal ndaj rrezeve të diellit.</Albanian>
                                        </li>
                                        <li>
                                            <English>Solar panels are then securely mounted.</English>
                                            <Albanian>Panelet diellore më pas montohen mirë.</Albanian>
                                        </li>
                                    </ol>
                                    <div style={{ clear: "both" }}></div>
                                </div>
                            </div>
                            <div className={"slide fade" + (slide10 === 1 ? "" : " hidden-slide")}>
                                <img className={"imagefloat-right" + (slide10 === 1 ? "" : " hidden-slide")} id="img15" src={process.env.PUBLIC_URL + "PVInstallationProcess.png"} alt={albanian ? "Procesi i instalimit" : "Installation Process"} onClick={() => load(15)} width="200" height="430" />
                                <div className="content-pane">
                                    <ol>
                                        <li value="6">
                                            <English>Electrical wiring is installed and the building's electricity supply will be momentarily shut off.</English>
                                            <Albanian>Është instaluar instalime elektrike dhe energjia elektrike e objektit do të ndërpritet për momentin.</Albanian>
                                        </li>
                                        <li>
                                            <English>The solar inverter is connected to the panels. A battery can also be installed and connected.</English>
                                            <Albanian>Inverteri diellor është i lidhur me panelet. Mund të instalohet dhe lidhet gjithashtu një bateri.</Albanian>
                                        </li>
                                        <li>
                                            <English>To finally generate electricity, the inverter is connected to the building's consumer unit.</English>
                                            <Albanian>Për të gjeneruar përfundimisht energji elektrike, inverteri lidhet me njësinë e konsumit të ndërtesës.</Albanian>
                                        </li>
                                        <li>
                                            <English>Installer will switch on the power and test the new system. Installation is now complete.</English>
                                            <Albanian>Instaluesi do të ndezë energjinë dhe do të testojë sistemin e ri. Instalimi tani ka përfunduar.</Albanian>
                                        </li>
                                        <li>
                                            <English>Panels do not require very much maintenance. It is important to keep them clean and regularly inspected.</English>
                                            <Albanian>Panelet nuk kërkojnë shumë mirëmbajtje. Është e rëndësishme t'i mbani ato të pastra dhe të inspektohen rregullisht.</Albanian>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <button type="button" className="slide-prev" onClick={() => setSlide10(((slide10 - 1) % 2 + 2) % 2)}>&#10094;</button>
                            <button type="button" className="slide-next" onClick={() => setSlide10((slide10 + 1) % 2)}>&#10095;</button>
                        </div>
                        <div className="image-center-centering bottom-margin">
                            <span className={"slide-dot" + (slide10 === 0 ? " active" : "")} onClick={() => setSlide10(0)}></span>
                            <span className={"slide-dot" + (slide10 === 1 ? " active" : "")} onClick={() => setSlide10(1)}></span>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="odd-section" id="section-11">
                        <div id="res-fire-safety">
                            <English><h1 className="largerfontb">Solar Fire Safety</h1></English>
                            <Albanian><h1 className="largerfontb">Siguria diellore nga zjarri</h1></Albanian>
                        </div>
                        <div className="static-display">
                            <div>
                                <English>Solar rooftop fires can be caused by design flaws, component defects, and faulty installation. To avoid this, the rooftop solar PV system should be installed as stated in current safety codes and standards. There should be clear labeling in the building that indicates which power lines are connected to the PV system and where the different components are located.</English>
                                <Albanian>Zjarret në çati diellore mund të shkaktohen nga të metat e projektimit, defektet e komponentëve dhe instalimi i gabuar. Për të shmangur këtë, sistemi diellor PV në çati duhet të instalohet siç thuhet në kodet dhe standardet aktuale të sigurisë. Duhet të ketë një etiketim të qartë në ndërtesë që tregon se cilat linja elektrike janë të lidhura me sistemin FV dhe ku ndodhen komponentët e ndryshëm.</Albanian>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="even-section" id="section-12">
                        <div id="res-defn">
                            <English><h1 className="largerfontb">Definitions</h1></English>
                            <Albanian><h1 className="largerfontb">Përkufizimet</h1></Albanian>
                        </div>
                        <div className="static-display">
                            <ul>
                                <li>
                                    <English><b>Solar Energy:</b> Electromagnetic energy transmitted from the sun.</English>
                                    <Albanian><b>Energjia diellore:</b> Energjia elektromagnetike e transmetuar nga dielli.</Albanian>
                                </li>
                                <li>
                                    <English><b>Sun Irradiation:</b> The amount of power received from the sun.</English>
                                    <Albanian><b>Rrezatimi i diellit:</b> Sasia e fuqisë së marrë nga dielli.</Albanian>
                                </li>
                                <li>
                                    <English><b>Photovoltaic (PV):</b> Converting sunlight into electricity.</English>
                                    <Albanian><b>Fotovoltaik (PV):</b> Shndërrimi i dritës së diellit në energji elektrike.</Albanian>
                                </li>
                                <li>
                                    <English><b>Photovoltaic (PV) System:</b> A system for converting sunlight into electricity by the photovoltaic process, including PV panels, inverter, and more.</English>
                                    <Albanian><b>Sistemi Fotovoltaik (PV):</b> Një sistem për konvertimin e dritës së diellit në energji elektrike me anë të procesit fotovoltaik, duke përfshirë panelet PV, inverterin dhe më shumë.</Albanian>
                                </li>
                                <li>
                                    <English><b>Inverter:</b> A device that converts electricity currents for photovoltaic systems.</English>
                                    <Albanian><b>Inverter:</b> Një pajisje që konverton rrymat e energjisë elektrike për sistemet fotovoltaike.</Albanian>
                                </li>
                                <li>
                                    <English><b>Net Metering:</b> Allows users who generate their own electricity using a photovoltaic system to export their surplus energy back to the grid.</English>
                                    <Albanian><b>Matja Net:</b> Lejon përdoruesit që prodhojnë vetë energjinë elektrike duke përdorur një sistem fotovoltaik, të eksportojnë energjinë e tyre të tepërt përsëri në rrjet.</Albanian>
                                </li>
                                <li>
                                    <English><b>Electrical Grid:</b> An integrated system that distributes electricity.</English>
                                    <Albanian><b>Electrical Grid:</b> Një sistem i integruar që shpërndan energjinë elektrike.</Albanian>
                                </li>
                                <li>
                                    <English><b>Grid‐Connected System:</b> A photovoltaic system that supplies power to the grid.</English>
                                    <Albanian><b>Sistemi i lidhur me rrjetin:</b> Një sistem fotovoltaik që furnizon me energji rrjetin.</Albanian>
                                </li>
                                <li>
                                    <English><b>Kilowatt (kW):</b> A unit of electrical power; 1kW = 1000 watts.</English>
                                    <Albanian><b>Kilovat (kW):</b> Një njësi e fuqisë elektrike; 1kW = 1000 vat.</Albanian>
                                </li>
                                <li>
                                    <English><b>Kilowatt‐Hour (kWh):</b> A unit of energy; 1 kilowatt acting over a period of 1 hour.</English>
                                    <Albanian><b>Kilovat-orë (kWh):</b> Një njësi energjie; 1 kilovat që vepron në një periudhë prej 1 ore.</Albanian>
                                </li>
                                <li>
                                    <English><b>Megawatt (MW):</b> 1MW = 1,000 kilowatts.</English>
                                    <Albanian><b>Megavat (MW):</b> 1MW = 1000 kilovat.</Albanian>
                                </li>
                            </ul>
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
                <li className="outer-li"><a href="#res-defn" onClick={e => jumpTo(e, "res-defn")}><English>Definitions</English><Albanian>Përkufizimet</Albanian></a></li>
                <li className="outer-li"><a href="#res-why-imp" onClick={e => jumpTo(e, "res-why-imp")}><English>Why is solar energy important?</English><Albanian>Pse është e rëndësishme energjia diellore?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-why-imp-content" onClick={e => { jumpTo(e, "res-why-imp-content"); setSlides.setSlide1(0); }}><English>Helps mitigate climate change</English><Albanian>Ndihmon në zbutjen e ndryshimeve klimatike</Albanian></a></li>
                        <li><a href="#res-why-imp-content" onClick={e => { jumpTo(e, "res-why-imp-content"); setSlides.setSlide1(1); }}><English>Sunny Potential</English><Albanian>Potencial me diell</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-myths" onClick={e => jumpTo(e, "res-myths")}><English>Solar myths and misconceptions</English><Albanian>Mitet diellore dhe keqkuptimet</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-myths-content" onClick={e => { jumpTo(e, "res-myths-content"); setSlides.setSlide2(0); }}><English>Myth #1</English><Albanian>Miti #1</Albanian></a></li>
                        <li><a href="#res-myths-content" onClick={e => { jumpTo(e, "res-myths-content"); setSlides.setSlide2(1); }}><English>Myth #2</English><Albanian>Miti #2</Albanian></a></li>
                        <li><a href="#res-myths-content" onClick={e => { jumpTo(e, "res-myths-content"); setSlides.setSlide2(2); }}><English>Myth #3</English><Albanian>Miti #3</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-benefits" onClick={e => jumpTo(e, "res-benefits")}><English>The benefits of solar energy for your business</English><Albanian>Përfitimet e energjisë diellore për biznesin tuaj</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-benefits-content" onClick={e => { jumpTo(e, "res-benefits-content"); setSlides.setSlide3(0); }}><English>Reduce Energy Costs</English><Albanian>Ulja e kostove të energjisë</Albanian></a></li>
                        <li><a href="#res-benefits-content" onClick={e => { jumpTo(e, "res-benefits-content"); setSlides.setSlide3(1); }}><English>Increased Energy Security and Independence</English><Albanian>Rritja e Sigurisë dhe Pavarësisë së Energjisë</Albanian></a></li>
                        <li><a href="#res-benefits-content" onClick={e => { jumpTo(e, "res-benefits-content"); setSlides.setSlide3(2); }}><English>Green Business</English><Albanian>Biznesi i Gjelbër</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-should-solar" onClick={e => jumpTo(e, "res-should-solar")}><English>Should your business go solar?</English><Albanian>A duhet që biznesi juaj të shkojë diellor?</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-should-solar-content" onClick={e => { jumpTo(e, "res-should-solar-content"); setSlides.setSlide4(0); }}><English>Why should I go solar?</English><Albanian>Pse duhet të shkoj në diell?</Albanian></a></li>
                        <li><a href="#res-should-solar-content" onClick={e => { jumpTo(e, "res-should-solar-content"); setSlides.setSlide4(0); }}><English>Is solar right for my business?</English><Albanian>A është solari i duhur për biznesin tim?</Albanian></a></li>
                        <li><a href="#res-should-solar-content" onClick={e => { jumpTo(e, "res-should-solar-content"); setSlides.setSlide4(0); }}><English>How much does solar cost?</English><Albanian>Sa kushton solari?</Albanian></a></li>
                        <li><a href="#res-should-solar-content" onClick={e => { jumpTo(e, "res-should-solar-content"); setSlides.setSlide4(1); }}><English>How should I finance my panels?</English><Albanian>Si duhet të financoj panelet e mia?</Albanian></a></li>
                        <li><a href="#res-should-solar-content" onClick={e => { jumpTo(e, "res-should-solar-content"); setSlides.setSlide4(1); }}><English>How much money will I save with solar?</English><Albanian>Sa para do të kursej me solar?</Albanian></a></li>
                        <li><a href="#res-should-solar-content" onClick={e => { jumpTo(e, "res-should-solar-content"); setSlides.setSlide4(1); }}><English>How long will my solar panels last?</English><Albanian>Sa kohë do të zgjasin panelet e mia diellore?</Albanian></a></li>
                        <li><a href="#res-should-solar-content" onClick={e => { jumpTo(e, "res-should-solar-content"); setSlides.setSlide4(2); }}><English>Do solar panels have a warranty?</English><Albanian>A kanë garanci panelet diellore?</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-contact" onClick={e => jumpTo(e, "res-contact")}><English>Contact for more information</English><Albanian>Kontaktoni për më shumë informacion</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-contact-content" onClick={e => { jumpTo(e, "res-contact-content"); setSlides.setSlide5(0); }}><English>Solar Installers</English><Albanian>Instalues ​​diellor</Albanian></a></li>
                        <li><a href="#res-contact-content" onClick={e => { jumpTo(e, "res-contact-content"); setSlides.setSlide5(0); }}><English>Map of solar installers near Tirana</English><Albanian>Harta e instaluesve diellorë pranë Tiranës</Albanian></a></li>
                        <li><a href="#res-contact-content" onClick={e => { jumpTo(e, "res-contact-content"); setSlides.setSlide5(1); }}><English>Banks</English><Albanian>Bankat</Albanian></a></li>
                        <li><a href="#res-contact-content" onClick={e => { jumpTo(e, "res-contact-content"); setSlides.setSlide5(2); }}><English>Calculations</English><Albanian>Llogaritjet</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-financing" onClick={e => jumpTo(e, "res-financing")}><English>Financing Your System</English><Albanian>Financimi i sistemit tuaj</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-financing-content" onClick={e => { jumpTo(e, "res-financing-content"); setSlides.setSlide6(0); }}><English>Cash</English><Albanian>Paratë e gatshme</Albanian></a></li>
                        <li><a href="#res-financing-content" onClick={e => { jumpTo(e, "res-financing-content"); setSlides.setSlide6(1); }}><English>Loan</English><Albanian>Kredi</Albanian></a></li>
                        <li><a href="#res-financing-content" onClick={e => { jumpTo(e, "res-financing-content"); setSlides.setSlide6(2); }}><English>Grants</English><Albanian>Grantet</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-choose-inst" onClick={e => jumpTo(e, "res-choose-inst")}><English>Choosing the right solar installer</English><Albanian>Zgjedhja e instaluesit të duhur diellor</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-choose-inst-content" onClick={e => { jumpTo(e, "res-choose-inst-content"); setSlides.setSlide7(0); }}><English>Credibility and Expertise</English><Albanian>Besueshmëria dhe Ekspertiza</Albanian></a></li>
                        <li><a href="#res-choose-inst-content" onClick={e => { jumpTo(e, "res-choose-inst-content"); setSlides.setSlide7(1); }}><English>Transparency</English><Albanian>Transparenca</Albanian></a></li>
                        <li><a href="#res-choose-inst-content" onClick={e => { jumpTo(e, "res-choose-inst-content"); setSlides.setSlide7(2); }}><English>Reputation and Testimonials</English><Albanian>Reputacioni dhe dëshmitë</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-panel-types" onClick={e => jumpTo(e, "res-panel-types")}><English>Different types of panels</English><Albanian>Lloje të ndryshme panelesh</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-monocr" onClick={e => { jumpTo(e, "res-monocr"); }}><English>Monocrystalline</English><Albanian>Monokristale</Albanian></a></li>
                        <li><a href="#res-polycr" onClick={e => { jumpTo(e, "res-polycr"); }}><English>Polycrystalline</English><Albanian>Polikristaline</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-apply-perm" onClick={e => jumpTo(e, "res-apply-perm")}><English>Applying for a Building Permit</English><Albanian>Aplikimi për Leje Ndërtimi</Albanian></a></li>
                <li className="outer-li"><a href="#res-inst-proc" onClick={e => jumpTo(e, "res-inst-proc")}><English>The Day of Installment</English><Albanian>Dita e Këstit</Albanian></a></li>
                <li>
                    <ul>
                        <li><a href="#res-inst-proc-content" onClick={e => { jumpTo(e, "res-inst-proc-content"); setSlides.setSlide10(0); }}><English>Steps 1-5</English><Albanian>Hapat 1-5</Albanian></a></li>
                        <li><a href="#res-inst-proc-content" onClick={e => { jumpTo(e, "res-inst-proc-content"); setSlides.setSlide10(1); }}><English>Steps 6-10</English><Albanian>Hapat 6-10</Albanian></a></li>
                    </ul>
                </li>
                <li className="outer-li"><a href="#res-apply-perm" onClick={e => jumpTo(e, "res-fire-safety")}><English>Solar Fire Safety</English><Albanian>Siguria diellore nga zjarri</Albanian></a></li>
                <li className="outer-li"><a href="#res-defn" onClick={e => jumpTo(e, "res-defn")}><English>Definitions</English><Albanian>Përkufizimet</Albanian></a></li>
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

/**
 * Scrolls to the respective TOC location based on the id provided.
 * @param {*} e A MouseEvent for a React onClick function
 * @param {string} id The HTML id to scroll to
 */
function jumpTo(e, id) {
    e.preventDefault();
    for (let sec of document.getElementsByClassName("fade-in-section")) {
        sec.classList.remove("slow");
        sec.classList.add("is-visible");
    }
    const index = document.getElementById(id);
    window.scrollTo({
        left: 0,
        top: index.offsetTop - 100,
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
            <div ref={domRef} className={props.className} id={props.id}>
                <div className="rounding"></div>
                <div className={`fade-in-section${loadSlow ? ' slow' : ''}${isVisible ? ' is-visible' : ''}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}