import { Menu, Container, Image } from "semantic-ui-react";
import Link from "next/link";

function Header() {
  return (
    <>
      <Menu fluid inverted id="menu">
        <Container text>
          <Link href="/">
            <Menu.Item header>
              <Image
                size="mini"
                src="/public/logo.svg"
                style={{ marginRight: "1em" }}
              />
              React Reserve
            </Menu.Item>
          </Link>
        </Container>
      </Menu>
    </>
  );
}

export default Header;
