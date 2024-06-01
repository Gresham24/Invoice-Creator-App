import React, { useState } from "react";
import Form, { FormDataContext } from "./components/Form";
import FormPrint from "./components/FormPrint";
import { Route, Routes } from "react-router-dom";

/**
 *
 * GROOTMAN - I'm going to add a variety of comments and will categorize them as much
 * as I can. Some will be related to best practices, others about tooling, and others opinions.
 * Where it's opinion and personal preference, I'll make sure to highlight it.
 */

/**
 * [TOOLING]
 * The first thing I noticed about the code is its formatting. I highly recommend
 * using a code formatter like prettier to get consistent looking code. Prettier
 * will automatically format your code as you save your files. Removing any unnecessary new lines
 * like we have between the two Route components.
 *
 * You'll notice that my Pull Request will come with formatting since I have prettier as a plugin in my VSCode.
 */

function InvoiceApp() {
  /**
   * [LIBRARIES]
   *  I see the temptation to manage your own form state. But forms aren't as simple as
   * we can often make them out to be. E.g. with validation, if you'd like to show errors
   * for an invalid field, without showing errors for untouched empty fields, there's a lot
   * of logic you'd have to write.
   *
   * You can leverage existing libraries to take on this task. I'm a big fan of Formik,
   * but there are other libraries you can try out. I would highly recommend avoiding
   * managing your own form state.
   */
  const [formValues, setFormValues] = useState({
    details: {},
    items: [],
    totals: {},
  });

  return (
    <FormDataContext.Provider value={{ formValues, setFormValues }}>
      <Routes>
        <Route path="preview" element={<FormPrint />} />

        <Route path="/" element={<Form />} />
      </Routes>
    </FormDataContext.Provider>
  );
}

export default InvoiceApp;
