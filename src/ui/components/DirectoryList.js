import { Row, Col } from 'react-flexbox-grid';
import GET_DIRECTORY from '../../settings/api';
import Card from './CardOffer';

export default function DirectoryList({ ...props }) {

    const [perPage, setPerPage] = useState(1);
    const [offerList, setOfferList] = useState([]);

    useEffect(() => {
        fetchOffersList();
    }, []);

    useEffect(() => {
        if(perPage === 1){
            return undefined
        }
        fetchOffersList();
    }, [perPage]);

    const fetchOffersList = () => {
        props.setLoader(true);
        GET_DIRECTORY.getDirectory(perPage)
        .then((data) => {
            console.log(data);
            setOfferList(prevOffers => ([...prevOffers, ...data.data]));
            props.setLoader(false);
        })
        .catch((error) => {
            console.log(error);
            props.setLoader(false);
        });
    }

    return(
        <>
            <Row className="no-margin" style={{ width: '100%', height: perPage === 1 && props.isLoading === true ? '100vh' : 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexFlow: 'wrap' }}>
                {
                    offerList.map((item , i) => {
                        return(
                            <Col className="no-padding" key={i} xs={12} sm={12} md={6} lg={3} style={{ width: '100%', marginRight: 10, height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                                <Card item={item} i={i} />
                            </Col>
                        )
                    })
                }
            </Row>
            <div style={{ marginTop: '2em', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <button className="main-cta" onClick={() => {setPerPage(perPage + 1);}}>
                    <span className="white-title-color">
                        Cargar más
                    </span>
                </button>
            </div>
        </>
    );
}
