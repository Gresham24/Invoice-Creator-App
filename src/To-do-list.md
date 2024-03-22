# TO DO:

1. Add input for discount % and tax % above extra information section

2. Caclulations for the following for form input:
  - subtotal
  - total VAT 
  - discount
  - total amount

2. Display subtotal, tax, discount and total on FormPrint

3. Add FormPrint component to a new page

4. Move Preview button to the top right of the Form page

5. Create "Save invoice" and "Back" button on the preview page 

6. Save button should generate PDF of the document 


## Questions:
- what purpose do the discount and tax inputs at the bottom serve?
- can the discount/tax be applied to each line item AND to the whole invoice?
- preview vs create invoice button - what's the screen that shows after each is clicked?


## Nice to haves:
- modify input properties/rules 
- add error handling of the invoice
- calculation for Due date: 
  1. store each selection in an object as a timevalue equivalent to the number of days
  2. when each is selected, caclulate the due date by adding selected timevalue to the issue date
- Unit labels, e.g. currency and % signs to figures