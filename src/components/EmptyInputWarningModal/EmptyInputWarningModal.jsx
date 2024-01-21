import './EmptyInputWarningModal.css'

const EmptyInputWarningModal = ({toggleWarningModal}) => {
    const goBack = () => {
        toggleWarningModal()
    }
    return (
        <div className="empty-input-warning-modal__screen">
            
            <div className="empty-input-warning">
                <h5 className="empty-input-warning__title">Debe completar todos los campos</h5>
                <button onClick={goBack} className="btn empty-input-warning__btn">Volver</button>
            </div>
        </div>
    );
};

export default EmptyInputWarningModal;
