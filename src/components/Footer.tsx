
//import Category from "./Category.astro";

import Link from "next/link"
import Image from 'next/image';

//  <!-- FOOTER -->
//  <!-- <Category category='' /> --> 


export const Footer = () => {
  
  return (
<>
<div  style={{padding: '2rem 0rem'}} >
	<table align="center" >
		<tbody>
			<tr>
				<td className="ft-paragrapf" style={{background:'#007C89',borderRadius:'1rem'}}>
					<table className="row-content">
						<tbody>
							<tr>
								<td>
									<table>
										<tbody>
											<tr>
												<td>
													<div>
														<Link href="https://www.aster.cat/forms/nousoci" style={{color:'#ffffff', textDecoration:'none'}} className="mn-h1-article-title" target="_blank">Fes-te soci d'Aster
														</Link>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<div>
	<table>
		<tbody>
			<tr>
				<td className="ft-paragrapf">
					<table className="row-content">
						<tbody>
							<tr>
								<td>
									<table>
										<tbody>
											<tr>
												<td  align="center">
													<div>
														<div className="ft1-div-img">
														<img src="https://www.aster.cat//images/codi-etic.jpg" className="ft1-img" width={61} height={46}
																alt="Aster, Agrupació Astronòmica de Barcelona, declarada Entitat d'utilitat pública segons resolució del Departament de Justícia de la Generalitat de Catalunya, número JUS/3230/2009 del 12/11/2009"
																title="Aster, Agrupació Astronòmica de Barcelona, declarada Entitat d'utilitat pública segons resolució del Departament de Justícia de la Generalitat de Catalunya, número JUS/3230/2009 del 12/11/2009"/>
														</div>
														<div className="ft2-div-p">
															<p className="ft2-pad">Aster, Agrupació Astronòmica de Barcelona, declarada Entitat
																	d'utilitat pública segons resolució del Departament de Justícia de la Generalitat de
																	Catalunya, número JUS/3230/2009 del 12/11/2009</p>
														</div>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
</div>

</>
	)
}