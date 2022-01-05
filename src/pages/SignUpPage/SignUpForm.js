import React, {useState} from "react";
import { TextField } from "@material-ui/core";
import { InputsContainer, SignUpFormContainer } from './styled';
import { useHistory } from 'react-router-dom';
import useForm from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { signUp } from "../../services/user";
import { CircularProgress } from "@material-ui/core";

const SignUpForm = ({setRightButtonText}) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email:'', password: '' })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        signUp(form ,clear, history, setRightButtonText, setIsLoading)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <SignUpFormContainer>
                <InputsContainer>
                <TextField
                        value={form.name}
                        name={'name'}
                        onChange={onChange}
                        label={'Nome'}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                    />

                    <TextField
                        value={form.email}
                        name={'email'}
                        onChange={onChange}
                        label={'E-mail'}
                        variant={"outlined"}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'email'}
                    />
                    <TextField
                        value={form.password}
                        name={'password'}
                        onChange={onChange}
                        label={'Senha'}
                        variant={'outlined'}
                        fullWidth
                        margin={'normal'}
                        required
                        type={'password'}
                    />
                </InputsContainer>  
                    <Button
                        type={'submit'}
                        fullWidth
                        variant={'contained'}
                        color={'primary'}
                    >
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Fazer Cadastro</>}
                    </Button>
            </SignUpFormContainer>
        </form>
            
    )
}

export default SignUpForm