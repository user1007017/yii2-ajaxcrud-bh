/*!
 * Ajax Crud 
 * =================================
 * Use for user1007017/yii2-ajaxcrud-bh extension
 * @author John Martin john.itvn@gmail.com
 */
$(document).ready(function () {

    // Create instance of Modal Remote
    // This instance will be the controller of all business logic of modal
    // Backwards compatible lookup of old ajaxCrubModal ID
    if ($('#ajaxCrubModal').length > 0 && $('#ajaxCrudModal').length == 0) {
        modal = new ModalRemote('#ajaxCrubModal');
    } else {
        modal = new ModalRemote('#ajaxCrudModal');
    }
    // Catch click event on all buttons that want to open a modal
    $(document).on('click', '[role="modal-remote"]', function (event) {
        var selectedIds = [];
        event.preventDefault();
        var Output;
        var RowID = $("#grid1").yiiGridView("getSelectedRows");
        if(selectedIds.length == 0){
            var Mode = 'Create';
        }else{
            var Mode = 'UpdateMultiple';
        }
        Output = JSON.stringify(RowID);
        console.log(RowID);
        // modal.find('#buchungen-bu_datensaetze').val(Output);
        // modal.find('#buchungen-mode').val(Mode);
        // Open modal
        modal.open(this, Output);
        modal.setValue('#buchungen-mode',Mode);
        modal.setValue('#buchungen-bu_datensaetze',Output);
    });



    // Catch click event on all buttons that want to open a modal
    // with bulk action
    $(document).on('click', '[role="modal-remote-bulk"]', function (event) {
        event.preventDefault();

        // Collect all selected ID's
        var selectedIds = [];

        // See if we have a selector set
        var selection = 'selection';
        if ($(this).data("selector") != null) {
            selection = $(this).data("selector");
        }

        $('input:checkbox[name="' + selection + '[]"]').each(function () {
            if (this.checked)
                selectedIds.push($(this).val());
        });

        if (selectedIds.length == 0) {
            // If no selected ID's show warning
            modal.show();
            modal.setTitle('No selection');
            modal.setContent('You must select item(s) to use this action');
            modal.addFooterButton("Close", 'button','btn btn-default', function (button, event) {
                $('#ajaxCrudModal').modal('hide');
            });
        } else {
            // Open modal
            modal.open(this, selectedIds);
        }
    });
});
