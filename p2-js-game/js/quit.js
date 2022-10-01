function closeCurrentTab() {
        var conf = confirm("Are you sure, you want to close this tab?");
        if (conf == true) {
           window.close();
        }
    }
