import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import HeaderNavLink from "./header-nav-link"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div style={{ maxWidth: 960, }} className='my-0 mx-auto py-3 px-1'>
      <div>
        <h1 className="m-0">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <nav>
        <div className="pt-3 flex flex-row space-x-5">
          <HeaderNavLink to={"/"} name={"Home"} />
          <HeaderNavLink to={"/page-2/"} name={"Page 2"} />
          <HeaderNavLink to={"/using-typescript"} name={"Using TypeScript"} />
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
