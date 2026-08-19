import ButtonContainer2 from "./ButtonContainer2";
import UniqueStateButtons from "./UniqueStateComponent";

export default function ButtonContainer() {
    return (
        <div className="side-by-side">
            <div className="block">
                <h3> Increment Separately</h3>
                <UniqueStateButtons />
                <UniqueStateButtons />
            </div>
            <div className="block">
                <ButtonContainer2 />
            </div>
        </div>
    )
}