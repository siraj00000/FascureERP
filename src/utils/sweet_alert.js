import swal from 'sweetalert';

export const DeleteAlert = (handleAction, url, setLoading) => {
    return new Promise((resolve, reject) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this row!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    setLoading(true);
                    handleAction(url).then(res => (
                        swal("Poof! Your selected row has been deleted!", {
                            icon: "success",
                        })
                    )).catch(error => reject(error));
                    resolve(true);
                } else {
                    swal("Your data file is safe!");
                }
            });
    });
};