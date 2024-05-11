# TO DO:

1. Page numbers. ‘Page 1 of 1’ etc.

2. The header can’t be the same in all the pages - the header should just have the grey part with the company logo and invoice number for the rest of the pages after the first one.

2. Display subtotal, tax, discount and total on FormPrint

3. Retain values on Routing when back button clicked

4. Caclulations for the following for form input:

-   subtotal
-   total VAT
-   discount
-   total amount

5. 


## Questions:

-   what purpose do the discount and tax inputs at the bottom serve?
-   can the discount/tax be applied to each line item AND to the whole invoice?
-   preview vs create invoice button - what's the screen that shows after each is clicked?

## Nice to haves:

-   modify input properties/rules
-   add error handling of the invoice
-   calculation for Due date:
    1. store each selection in an object as a timevalue equivalent to the number of days
    2. when each is selected, caclulate the due date by adding selected timevalue to the issue date
-   Unit labels, e.g. currency and % signs to figures
