import React from 'react'

export const Modal = () => {
    return (
        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit The Note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="e_title" className="col-form-label">Title:</label>
                                <input type="text" className="form-control" id="e_title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="e_description" className="col-form-label">Description:</label>
                                <textarea className="form-control" id="e_description"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="e_tag" className="col-form-label">Tag:</label>
                                <input type='text' className="form-control" id="e_tag" />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
