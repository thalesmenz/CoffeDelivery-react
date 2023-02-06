import { ConfirmRequest } from "./components/ConfirmRequest";
import { FormEndereco } from "./components/FormEntrega";

export function Payment() {
    return (
        <div>
            <FormEndereco />
            <ConfirmRequest />
        </div>
    )
}