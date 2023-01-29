import Clickable from "./Clickable";
import styled from "styled-components";

function SecondaryButton(props) {
    // Здесь устанавливается минимальная ширина для кнопки
    let minWidth = props.minWidth === undefined ? '217px' : props.minWidth;
    const Button = styled.div`
        background: #FFFFF;
        border-radius: 24px;
        border: 1px solid #64748B;
        min-width: ${minWidth};
        color: #64748B;
        &:hover {
            background: rgba(255,255,255,0.8);
            border: 0px;
        }
        &:active {
            background: rgba(255,255,255,0.6);
            border: 0px;
        }
    `;
    return (
        <Clickable >
            <Button className='p-2 text-md'>
                {props.children}
            </Button>
        </Clickable>
        
    );
}

export default SecondaryButton;