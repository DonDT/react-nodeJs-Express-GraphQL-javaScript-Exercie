import React from "react";

function FormField({
  handleSubmitForm,
  newName,
  newNumber,
  handleSubmitNewName,
  handleSubmitNewNumber
}) {
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          name: <input value={newName} onChange={handleSubmitNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleSubmitNewNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default FormField;
