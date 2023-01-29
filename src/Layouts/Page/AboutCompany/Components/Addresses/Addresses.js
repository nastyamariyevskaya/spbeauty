import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='px border p-3 d-flex justify-content-between flex-column gap-2 mt-0 col'>
            <div className='title p-4'>Адреса заведений
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            </div>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            
        </div>
    );
}

export default Addresses;