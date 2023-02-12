import { createContext, ReactNode, useState } from "react";

interface FormProviderProps {
    children: ReactNode
}

interface FormContextType {
    Cep: string
    setCep: (value: string) => void
    Rua: string
    setRua: (value: string) => void
    Numero: string
    setNumero: (value: string) => void
    Complemento: string
    setComplemento: (value: string) => void
    Bairro: string
    setBairro: (value: string) => void
    Cidade: string
    setCidade: (value: string) => void
    UF: string
    setUF: (value: string) => void
    Pagamento: string
    setPagamento: (value: string) => void
    handleSaveInfos: () => void
    infos: infosProps
}

interface infosProps {
    cep: string,
    rua: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    pagamento: string
}

export const FormContext = createContext({} as FormContextType)

export function FormProvider({ children }: FormProviderProps) {    

    const [Cep, setCep] = useState<string>('')

    const [Rua, setRua] = useState<string>('')
    
    const [Numero, setNumero] = useState<string>('')

    const [Complemento, setComplemento] = useState<string>('')

    const [Bairro, setBairro] = useState<string>('')
    
    const [Cidade, setCidade] = useState<string>('')

    const [UF, setUF] = useState<string>('')


    const [Pagamento, setPagamento] = useState<string>('')

    const [infos, setInfos] = useState<infosProps>({} as infosProps)



    function handleSaveInfos() {
        setInfos({
            cep: Cep,
            rua: Rua,
            numero: Numero,
            complemento: Complemento,
            bairro: Bairro,
            cidade: Cidade,
            uf: UF,
            pagamento: Pagamento
        })
    }

    return (
      <FormContext.Provider 
      value={{ 
        Cep,
        setCep,
        Rua,
        setRua,
        Numero,
        setNumero,
        Complemento,
        setComplemento,
        Bairro,
        setBairro,
        Cidade,
        setCidade,
        UF,
        setUF,
        Pagamento,
        setPagamento,
        handleSaveInfos,
        infos
      }}>
            {children}
      </FormContext.Provider>
    )
}