import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';
import PrimaryButton from '../../../../../Components/PrimaryButton';

const Option = styled.div`
    outline: none;
`;

function ListElement(props) {
    return (
        <div className='py-4 px-0 d-flex flex-row align-items-center align-self-stretch gap-2 col'>
            <Option className='flex-grow-1 p-2'>{props.children}</Option>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;