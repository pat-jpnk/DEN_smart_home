import React from 'react'
import styles from '../styles/index.module.scss'
import FormGroup from '@material-ui/core/FormGroup'
import TextField from '@material-ui/core/TextField'
import ContactState from '../interfaces/ContactState'
import {InputLabel, Paper, Input, Button} from '@material-ui/core';
import handleViewport from 'react-in-viewport'
import ViewPortProperties from '../interfaces/ViewPortProperties'

class ContactForm extends React.Component<ViewPortProperties,ContactState> {

    constructor(props : any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    getStyle() {
        const {inViewport, enterCount} = this.props;

        if (inViewport && enterCount === 1) {
            return { WebkitTransition: 'opacity 0.75s ease-in' };
          } else if (!inViewport && enterCount < 1) {
            return { WebkitTransition: 'none', opacity: '0' };
          } else {
            return {};
          }
    }

    isEmail(input : string) : boolean {        
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    }

    validate(input : ContactState) : boolean {
        if((input.name).trim() === '') {
            return false;
        } else if (!this.isEmail(input.email)) {
            return false;
        } else if ((input.message).trim() === '') {
            return false;
        }
        return true;
    }

    handleChange(e: any) : void{
       const target = e.target;
       const value = target.type === 'checkbox' ? target.checked : target.value;
       const name = target.name;

       this.setState({
               [name]: value
           } as unknown as ContactState);
    }

    handleSubmit(e : React.FormEvent) : void {
        e.preventDefault();
        if(this.validate(this.state)) {
            console.log(this.state); // TODO: remove, Send mail here
        }
    }
    
    render() {
        return (
                <Paper elevation={2} className={styles.formBackground} style={this.getStyle()}>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <div className={styles.contactInformation}>
                            <FormGroup>
                                <div className={styles.formItem}>
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <Input name="name" className={styles.nameInput} type="text" onChange={this.handleChange} id="name" required />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className={styles.formItem}>
                                    <InputLabel htmlFor="email">E-mail</InputLabel>
                                    <Input name="email" className={styles.emailInput} onChange={this.handleChange} id="email" type="email" required />
                                </div>
                            </FormGroup>    
                        </div>
                        <FormGroup className={styles.message}>
                            <InputLabel htmlFor="message">Message</InputLabel>
                            <TextField type="text" name="message" onChange={this.handleChange} className={styles.messageInput} id="message" rows="6" fullWidth required multiline/>
                        </FormGroup>
                        <Button className={styles.contactButton} type="submit" variant="outlined">Send</Button>
                    </form>
                </Paper>
        )
    }
}


const SomeSection = handleViewport(ContactForm, { rootMargin: '-1.0px' });
export default SomeSection;