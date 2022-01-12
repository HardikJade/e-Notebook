import React from 'react'
import { Notes } from './Notes'
export const Home = () => {
    return (
        <div className='container m-4'>
            <div className="container">
                <h1 className='display-6 text-center'>Add A Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="titleHelp"/>
                            <div id="titleHelp" className="form-text">Title Must Be 5 Character long.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description"/>
                        <div id="descHelp" className="form-text">Description Must Be 5 Character long.</div>
                    </div>
                    <div className="container d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">Add A Note</button>
                    </div>
                </form>
            </div>

            <div className="mt-4">
                <h1 className='display-6 text-center'>Your Notes</h1>
                <Notes/>
            </div>
        </div>
    )
}
