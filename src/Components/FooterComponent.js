import React from 'react';

export const FooterComponent = () => {
    return (
        <div>
            <div className='container nav-footer-bg'>
                {/* garis */}
                <div className='card border-0 nav-footer-bg'>
                    <div className='card-body'>
                        <hr />
                    </div>
                </div>

                {/* Created by */}
                <div className='row text-center'>
                    <div className='col-md-6'>
                        <div className='card nav-footer-card border-0 shadow-sm'>
                            <div className='card-body'>
                                <p className='h5'>FrontEnd :</p>
                                <ul className='text-start'>
                                    <li>Abdullah Hasan Mufid Fakhri</li>
                                    <li>Dery Nugroho Marjuki</li>
                                    <li>Muhammad Faruq Noor Afiyf</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='card nav-footer-card border-0 shadow-sm'>
                            <div className='card-body'>
                                <p className='h5'>BackEnd :</p>
                                <ul className='text-start'>
                                    <li>Clement Howard</li>
                                    <li>Thomi Rizqulloh</li>
                                    <li>Other</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* copyright */}
                <div className='card border-0 text-center nav-footer-bg'>
                    <div className='card-body'>
                        <p className='text-center text-secondary btn-sm'>Copyright &copy; Pemuda Pencari Berkah 2022</p>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    )
}
