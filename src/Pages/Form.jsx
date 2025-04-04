import React, { useState } from 'react';
import './Form.css';
import { useNavigate } from 'react-router-dom';

function Form({ setUser }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',

    });

    const [errors, setErrors] = useState({});


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(formData); 
        navigate("/Profile"); 

        const validationErrors = {};
        if (!formData.name.trim()) {
            validationErrors.name = "Entrez votre nom svp";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Entrez votre email svp";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors.email = "Email invalide";
        }


        setErrors(validationErrors);

    };

    return (
        <form onSubmit={handleSubmit}>
            <div id='reg'>
              <h1>Remplissez le formulaire!</h1>
                <label htmlFor="name" className="name">Nom :</label>
                <input 
                    type="text" 
                    name="name" 
                    className="name" 
                    placeholder="Votre nom" 
                    value={formData.name} 
                    onChange= {(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                {errors.name && <p className="error-message">{errors.name}</p>}

                <label htmlFor="email" className="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange= {(e) => setFormData({ ...formData, email: e.target.value })}

                    required
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
                
            <label htmlFor="message" className="message">Message :</label>
            <textarea name="message"
             id="message"
             value= {formData.message}
             onChange= {(e) => setFormData({ ...formData, message: e.target.value })}
             required
            >Message</textarea>

                <button className="submit">Soumettre</button>
            </div>
        </form>
    );
}

export default Form;
