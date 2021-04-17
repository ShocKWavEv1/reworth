import { Row, Col } from "react-flexbox-grid";
import GET_DIRECTORY from "../../settings/api";
import Card from "./CardOffer";
import empty from "../assets/empty.svg";

export default function DirectoryList({ ...props }) {
    const [perPage, setPerPage] = useState(1);
    const [offerList, setOfferList] = useState([]);
    const [shadowOfferList, setShadowOfferList] = useState([]);

    useEffect(() => {
        fetchOffersList();
    }, []);

    useEffect(() => {
        if (perPage === 1) {
            return undefined;
        }
        fetchOffersList();
    }, [perPage]);

    const fetchOffersList = () => {
        props.setLoader(true);
        GET_DIRECTORY.getDirectory(perPage)
            .then(data => {
                console.log(data);
                setOfferList(prevOffers => [...prevOffers, ...data.data]);
                setShadowOfferList(prevOffers => [...prevOffers, ...data.data]);
                props.setLoader(false);
            })
            .catch(error => {
                console.log(error);
                props.setLoader(false);
            });
    };

    const handleFilter = e => {
        console.log(e.target.value);
        let updatedArr = offerList;
        updatedArr = updatedArr.filter((item, i) => {
            return (
                item.name.toLowerCase().search(e.target.value.toLowerCase()) !==
                -1
            );
        });

        setShadowOfferList(updatedArr);

        console.log(shadowOfferList);
    };

    const renderEmptyState = () => {
        return (
            <div
                style={{
                    padding: "2rem 0rem",
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}>
                <img src={empty} alt={empty} style={{ width: "50%" }} />
                <div style={{ marginTop: "-1.15em" }}>
                    <h1
                        className="main-title-color"
                        style={{ fontSize: "2.25rem" }}>
                        No hay data que mostrar
                    </h1>
                </div>
            </div>
        );
    };

    return (
        <>
            <Row
                className="no-margin"
                style={{
                    width: "100%",
                    height:
                        perPage === 1 && props.isLoading === true
                            ? "100vh"
                            : "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    flexFlow: "wrap",
                }}>
                <div
                    style={{
                        width: "100%",
                        padding: "1rem 0 3rem 0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Busca por nombre"
                        onChange={e => handleFilter(e)}
                    />
                </div>
                {shadowOfferList.length === 0
                    ? renderEmptyState()
                    : shadowOfferList.map((item, i) => {
                          return (
                              <Col
                                  className="no-padding"
                                  key={i}
                                  xs={12}
                                  sm={12}
                                  md={6}
                                  lg={3}
                                  style={{
                                      width: "100%",
                                      marginRight: 10,
                                      height: "auto",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      flexDirection: "column",
                                  }}>
                                  <Card item={item} i={i} />
                              </Col>
                          );
                      })}
            </Row>
            <div
                style={{
                    marginTop: "2em",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <button
                    className="main-cta"
                    onClick={() => {
                        setPerPage(perPage + 1);
                    }}>
                    <span className="white-title-color">Cargar más</span>
                </button>
            </div>
        </>
    );
}
