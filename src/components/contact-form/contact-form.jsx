import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import './css/contact-form.css';

const FormikFormDemo = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            commentary: '',
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Es necesario que escribas tu nombre.';
            }

            if (!data.email) {
                errors.email = 'Introduce tu dirección de correo.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'La dirección de correo no es válida. E.g. example@email.com';
            }

            if (!data.commentary) {
                errors.commentary = 'Escribe la pregunta que quieras hacernos.';
            }

            if (!data.accept) {
                errors.accept = 'Tienes que aceptar los términos y condiciones.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);

            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    return (
        <div className="form">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="center" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem' }}></i>
                    <h5>Tu pregunta ha sido enviado</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                    Muchas gracias por enviarnos tu pregunta, <b>{formData.name}</b>, intentaremos contestarte lo antes posible, estate pendiente del siguiente correo: <b>{formData.email}</b>. No te olvides de revisar la carpeta de Correo No Deseado.
                    </p>
                </div>
            </Dialog>

            <div className="form-container">
                <div className="card">
                    <h1>Envianos las preguntas que tengas</h1>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field" id='hola'>
                            <span className="p-float-label">
                                <InputText style={{backgroundColor: "white", color:"black"}} id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nombre*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText style={{backgroundColor: "white", color:"black", fontWeight: "bolder"}} id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Correo*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <InputTextarea style={{backgroundColor: "white", color:"black"}} rows={5} cols={30} id="commentary" name="commentary" value={formik.values.commentary} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('commentary') })} autoResize/>
                                <label htmlFor="commentary" className={classNames({ 'p-error': isFormFieldValid('commentary') })}>Coméntanos lo que quieras*</label>
                            </span>
                            {getFormErrorMessage('commentary')}
                        </div>
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>Acepto los términos y condiciones.*</label>
                        </div>

                        <Button type="submit" label="Enviar" className='p-button-info'/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormikFormDemo;