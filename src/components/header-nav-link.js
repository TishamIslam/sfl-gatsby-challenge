import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const HeaderNavLink = ({ to, name }) => (
    <h2 className={"flex margin-0 font-16"}>
        <Link
          to={to}
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {name}
        </Link>
    </h2>
)


HeaderNavLink.propTypes = {
    to: PropTypes.string,
    name: PropTypes.string,
}


export default HeaderNavLink