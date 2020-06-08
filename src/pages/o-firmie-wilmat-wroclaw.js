import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="O firmie Wilmat | Zakres działalności: projekty, montaż, serwis, sprzedaż." />
    <h1>O Wilmat</h1>
    <h2>Doświadczenie</h2>
    <p>
      Działamy na rynku instalacji już od 2003 roku. Przez ten czas zdobyliśmy
      bogate doświadczenie, realizując różnorodne zadania dla wielu firm,
      instytucji oraz klientów indywidualnych.
    </p>
    <Link to="/">Go to home</Link> <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
