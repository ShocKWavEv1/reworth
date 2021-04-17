import styled from "@emotion/styled";

const Wrapper = styled("div")`
    background-color: ${props => props.theme.BODY};
    .main-bg{
        background-color: ${props => props.theme.BODY};
    }
    .main-bg-color{
        background-color: ${props => props.theme.MAIN_COLOR};
    }
    .main-title-color{
        color: ${props => props.theme.PRIMARY_TEXT_1};
    }
    .secondary-title-color{
        color: ${props => props.theme.PRIMARY_TEXT_2};
    }
    .accent-title-color{
        color: ${props => props.theme.MAIN_COLOR};
    }
    .white-title-color{
        color: #FFFFFF;
    }
    .accent-cta{
        background-color: #FF0066;
        letter-spacing: .025em;
        color: ${props => props.theme.INVERTED_TEXT};
        font-weight: 500;
        padding: .65rem 1.25rem;
        border-radius: .5em;
        display: inline-block;
        line-height: 1.375;
        box-shadow: 0 2px 8px 0 rgb(0 34 255 / 8%), 0 2px 8px 0 rgb(0 11 80 / 12%);
        z-index: 1;
    }
    .main-cta{
        letter-spacing: .025em;
        color: ${props => props.theme.INVERTED_TEXT};
        font-weight: 500;
        padding: 1.15rem 1.75rem;
        border-radius: .5em;
        display: inline-block;
        line-height: 1.375;
        background-color: ${props => props.theme.MAIN_COLOR};
        box-shadow: 0 2px 8px 0 rgb(0 34 255 / 8%), 0 2px 8px 0 rgb(0 11 80 / 12%);
        z-index: 1;
    }
    .main-shadow{
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 5%), 0 16px 64px 0 rgb(0 0 0 / 10%);
        transition-property: transform;
        transition-timing-function: cubic-bezier(.215,.61,.355,1);
        transition-duration: .3s;
    }

    .card-project{
        break-inside: avoid;
        page-break-inside: avoid;
        box-shadow: 0 8px 16px 0 rgb(0 0 0 / 5%), 0 16px 64px 0 rgb(0 0 0 / 10%);
        transition-property: transform;
        transition-timing-function: cubic-bezier(.215,.61,.355,1);
        transition-duration: .3s;
        border-radius: .5rem;
    }
    
`;

export { Wrapper };