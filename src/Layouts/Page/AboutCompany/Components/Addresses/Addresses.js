import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='p-4 d-flex justify-content-between flex-column gap-2 mt-4 col'>
            <div className='title p-2'>Адреса заведений</div>
            <div className='p-0 d-flex justify-content-start flex-column gap-4'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            
        </div>
    );
}

export default Addresses;