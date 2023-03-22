import styled from "styled-components";

const FooterLayout = styled.footer`
    position: fixed;
    width: 100%;
    top: auto;
    bottom: 0px;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
`;

const Disclaimer = styled.span`
    display: block;
    max-width: 60vw;
    height: 100%;
    
    opacity: 0.2;
    color: #2aec64;
    font-size: 14px;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterLayout>
            <Disclaimer>
                Disclaimer: The content on this page is created for informational purposes only and does not hold any commercial value.
            </Disclaimer>
        </FooterLayout>
    )
};

export default Footer;