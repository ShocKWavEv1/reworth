import { Wrapper } from "./theme/MainTheme";
import { Dimmer } from 'semantic-ui-react';
import MainHeader from "./ui/components/MainHeader";
import DirectoryList from "ui/components/DirectoryList";
import Footer from "./ui/components/Footer";

export default function App() {

    const [isLoading, setLoader] = useState(false);

    return (
        <>
            <Dimmer.Dimmable blurring dimmed={isLoading}>
                <Wrapper style={{ width: '100%', height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <MainHeader />
                    <div className="main-padding " style={{ width: '100%' }}>
                        <div style={{ width: '100%' }}>
                            <DirectoryList isLoading={isLoading} setLoader={(val) => setLoader(val)} />
                        </div>
                    </div>
                    <Footer />
                </Wrapper>
                <Dimmer page active={isLoading}>
                    <div className="loader" />
                </Dimmer>
            </Dimmer.Dimmable>
        </>
    );
}
