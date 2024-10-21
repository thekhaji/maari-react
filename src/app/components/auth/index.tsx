import React, {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import TextField from '@mui/material/TextField';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import '../../../css/login.css';
import { T } from "../../../libs/types/common";
import { Messages } from "../../../libs/config";
import { MemberInput } from "../../../libs/types/member";
import MemberService from "../../services/MemberService";
import { sweetErrorHandling } from "../../../libs/sweetAlert";


interface LoginModalProps {
    signupOpen: boolean;
    loginOpen: boolean;
    setLoginOpen: (isOpen: boolean) => void;
    setSignupOpen: (isOpen: boolean) => void;
    handleSignupClose: () => void;
    handleLoginClose: () => void;
}

const Login = (props: LoginModalProps)=>{
    const { signupOpen, loginOpen, handleSignupClose, handleLoginClose, setSignupOpen, setLoginOpen } = props;
    const [showPassword, setShowPassword] = React.useState(false);
    const [memberNick, setMemberNick] = useState<string>("");
    const [memberPhone, setMemberPhone] = useState<string>("");
    const [memberPassword, setMemberPassword] = useState<string>("");
    const [memberConfirmPassword, setMemberConfirmPassword] = useState<string>("");


    /** HANDLERS **/
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleUsername = (e: T) => {
        setMemberNick(e.target.value);
    };
    
    const handlePhone = (e: T) => {
        setMemberPhone(e.target.value);
    };
    
    const handlePassword = (e: T) => {
        console.log("Password:", e.target.value);
        setMemberPassword(e.target.value);
    };

    const handleConfirmPassword = (e: T) => {
        console.log("Confirm Password:", e.target.value);
        setMemberConfirmPassword(e.target.value);
    };

    const handlePasswordKeyDown = (e: T) => {
        if(e.key === "Enter" && signupOpen)
          handleSignupRequest().then();
      }

    const handleSignupRequest = async () => {
        try{
            console.log("inputs: ", memberNick, memberPhone, memberPassword);
            const isFulFill = memberNick!=="" && memberPhone!=="" && memberPassword!=="" ;
            const isPasswordMatch = (memberPassword === memberConfirmPassword) ;
            if(!isFulFill) throw new Error(Messages.error3);
            if(!isPasswordMatch) throw new Error(Messages.error6);

            const signupInput: MemberInput = {
              memberNick: memberNick,
              memberPhone: memberPhone,
              memberPassword: memberPassword,
            };

            const member = new MemberService();
            const result = await member.signup(signupInput);

            handleSignupClose();  
          }catch(err){
            console.log(err);
            handleSignupClose();  
            sweetErrorHandling(err).then();
          }
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={loginOpen}
                onClose={handleLoginClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className={"login-wrapper"}>
                    <h2 className={"loginTitle"}>Добро пожаловать!</h2>
                    <p className={"loginText"}>Пожалуйста введите свой логин и пароль чтобы зайти в свой личный кабинет</p>
                    <div className={"formBox"}>
                    <TextField 
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#5e5555bb', 
                        },
                        '&:hover fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        },
                        '& label.Mui-focused': {
                        color: '#675f66',
                        }, width: '100%' , backgroundColor: "#fbf2f9", borderRadius: "6px"}} id="outlined-basic" label="Логин" variant="outlined" />
                        <FormControl 
                        sx={{'& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#5e5555bb', 
                            },
                            '&:hover fieldset': {
                                borderWidth: '1px', 
                                borderColor: '#604545', 
                            },
                            '&.Mui-focused fieldset': {
                                borderWidth: '1px', 
                                borderColor: '#604545', 
                            },
                            },
                            '& label.Mui-focused': {
                        color: '#675f66',
                    }, mt: 3, width: '100%', backgroundColor: "#fbf2f9", borderRadius: "6px", borderColor: "black"}} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl >
                        <Link className={"passwordReset"} to="/">Забыли пароль? </Link>
                        <Link className={"loginBtn"} to="/"> <LoginIcon/> Войти в аккаунт </Link>
                        <p className={"signInText"}>Если у вас нету акаунта то пройдите регистрацию прямо сейчас!</p>
                        <Link onClick={()=>{
                            handleLoginClose();
                            setSignupOpen(true);
                        }} className={"loginBtn"} to="/"> <HowToRegIcon/> Зарегистрироваться </Link>
                    </div>
                </div>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={signupOpen}
                onClose={handleSignupClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className={"wrapperSignin"}>
                    <h2 className={"loginTitle"}>Регистрация аккаунта!</h2>
                    <p className={"loginText"}>Пожалуйста введите свои данные чтобы создать свой личный кабинет</p>
                    <div className={"formBox"}>
                        <div className={"formWrap"}>
                        <TextField onChange={handleUsername}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#5e5555bb', 
                        },
                        '&:hover fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        },
                        '& label.Mui-focused': {
                        color: '#675f66',
                        }, width: '100%' , backgroundColor: "#fbf2f9", borderRadius: "6px"}} id="outlined-basic" label="Логин" variant="outlined" />
                        <TextField onChange={handlePhone}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#5e5555bb', 
                        },
                        '&:hover fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        },
                        '& label.Mui-focused': {
                        color: '#675f66',
                        }, width: '100%' , backgroundColor: "#fbf2f9", borderRadius: "6px"}} id="outlined-basic" label="Телефон номер" variant="outlined" />
                        </div>
                        <div className={"formWrap"}>
                        <FormControl
                        onChange={handlePassword}
                    sx={{'& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#5e5555bb', 
                        },
                        '&:hover fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        },
                        '& label.Mui-focused': {
                    color: '#675f66',
                }, mt: 3, width: '100%', backgroundColor: "#fbf2f9", borderRadius: "6px", borderColor: "black"}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        </FormControl >
                        <FormControl
                        onKeyDown = {handlePasswordKeyDown}
                        onChange = {handleConfirmPassword}
                    sx={{'& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#5e5555bb', 
                        },
                        '&:hover fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        '&.Mui-focused fieldset': {
                            borderWidth: '1px', 
                            borderColor: '#604545', 
                        },
                        },
                        '& label.Mui-focused': {
                    color: '#675f66',
                }, mt: 3, width: '100%', backgroundColor: "#fbf2f9", borderRadius: "6px", borderColor: "black"}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Повторите Пароль</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                        </FormControl >
                        </div>
                    
                        <p className={"rememberMe"}>
                        <Checkbox  defaultChecked  
                        sx={{
                            color: pink[300],
                            '&.Mui-checked': {
                            color: pink[300],
                            },
                        }}
                        /> Запомнить меня</p>
                        <Link onClick={handleSignupRequest} className={"loginBtn"} to="/"> <LoginIcon/>Зарегистрироваться</Link>
                        <p className={"signInText"}>Если у вас нету акаунта то пройдите регистрацию прямо сейчас!</p>
                        <Link onClick={()=> {
                            handleSignupClose();
                            setLoginOpen(true);
                        }} className={"loginBtn"} to="/"> <HowToRegIcon/>Войти в аккаунт </Link>
                    </div>
                </div>    
            </Modal>
        </div>
    )
} 

export default Login;