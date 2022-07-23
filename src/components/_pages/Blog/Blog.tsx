import React, { useState } from 'react'

import './index.scss'
import 'hamburgers/_sass/hamburgers/hamburgers.scss'



export default function Blog() {
	const [isSidebarActive, setIsSidevarActive] = useState<boolean>(false);


	function onHamburgerClick() {
		setIsSidevarActive(!isSidebarActive);
	}


    return (
      	<>
			<section className="blog-main">
				<div className="container">
					<div className="row">
						<h1 className="blog-main__title">Fruits and vegetables</h1>
					</div>
					<div className="row">
						<div className="col-12 col-lg-6">
							<div className="blog-main-item">
								<div className="blog-main-item__img"></div>
								<div className="blog-main-item__gradient"></div>
								<div className="blog-main-item__wrapper">
									<h2 className="blog-main-item__title">
										This is a space for your blog headline, it can be long don’t worry about that
									</h2>
									<div className="mini-blog-info">
										<div className="mini-blog-info__author">Author</div>
										<div className="mini-blog-info__date">17.6.2020</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-lg-6">
							<div className="blog-main-item">
								<div className="blog-main-item__img"></div>
								<div className="blog-main-item__gradient"></div>
								<div className="blog-main-item__wrapper">
									<h2 className="blog-main-item__title">
										This is a space for your blog headline, it can be long don’t worry about that
									</h2>
									<div className="mini-blog-info">
										<div className="mini-blog-info__author">Author</div>
										<div className="mini-blog-info__date">17.6.2020</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



			<section className="content">
				<div className="container position-relative">
					<div className="blog-main__hamburger d-block d-xl-none">
						<button 
							className={isSidebarActive ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'} 
							type="button"
							onClick={onHamburgerClick}
						>
							<span className="hamburger-box">
								<span className="hamburger-inner"></span>
							</span>
						</button>
					</div>

					<div className="row">
						<div className="d-none d-xl-block col-xl-3">
							<h2 className="content__list-title">Archives</h2>
							<ul className="content__list">
								<li className="content__list-item">March 2020</li>
								<li className="content__list-item">February 2020</li>
								<li className="content__list-item">January 2020</li>
								<li className="content__list-item">November 2019</li>
								<li className="content__list-item">December 2019</li>
							</ul>

							<h2 className="content__list-title">Category</h2>
							<ul className="content__list">
								<li className="content__list-item">Food</li>
								<li className="content__list-item">Chefs specialities</li>
								<li className="content__list-item">Vegetable</li>
								<li className="content__list-item">Meat</li>
								<li className="content__list-item">Recommendations</li>
							</ul>

							<div className="content-subscribe">
								<h2 className="content-subscribe__title">Join our list</h2>
								<p className="content-subscribe__text">
									Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.
								</p>
								<form className="content-subscribe__form">
									<input 
										type="text" 
										placeholder='Your email address'
									/>
									<button type='submit' onClick={event => event.preventDefault()}>Subscribe</button>
								</form>
							</div>
						</div>

						<div className={isSidebarActive ? 'sidebar d-block d-xl-none' : 'sidebar sidebar--hidden d-block d-xl-none'}>
							<h2 className="content__list-title">Archives</h2>
							<ul className="content__list">
								<li className="content__list-item">March 2020</li>
								<li className="content__list-item">February 2020</li>
								<li className="content__list-item">January 2020</li>
								<li className="content__list-item">November 2019</li>
								<li className="content__list-item">December 2019</li>
							</ul>

							<h2 className="content__list-title">Category</h2>
							<ul className="content__list">
								<li className="content__list-item">Food</li>
								<li className="content__list-item">Chefs specialities</li>
								<li className="content__list-item">Vegetable</li>
								<li className="content__list-item">Meat</li>
								<li className="content__list-item">Recommendations</li>
							</ul>

							<div className="content-subscribe">
								<h2 className="content-subscribe__title">Join our list</h2>
								<p className="content-subscribe__text">
									Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.
								</p>
								<form className="content-subscribe__form">
									<input 
										type="text" 
										placeholder='Your email address'
									/>
									<button type='submit' onClick={event => event.preventDefault()}>Subscribe</button>
								</form>
							</div>
						</div>



						<div className="col-12 col-xl-9">
							<div className="container">
								<div className="row">
									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>

									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>

									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>

									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>

									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>

									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>

									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>

									<div className="col-6 col-md-4">
										<div className="content-item">
											<div className="content-item__img"></div>
											<h3 className="content-item__title">Space for your heding is here, write what you need</h3>
											<div className="mini-blog-info--black">
												<div className="mini-blog-info--black__author">Author</div>
												<div className="mini-blog-info--black__date">14.1.2020</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
    )
}
