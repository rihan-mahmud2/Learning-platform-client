import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Blog() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <div className="flex justify-center items-center p-10  h-screen">
      <div>
        <Fragment>
          <Accordion open={open === 1} animate={customAnimation}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is Cors?
            </AccordionHeader>
            <AccordionBody>
              Cors is something that allows the server send the data from other
              port.Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} animate={customAnimation}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              Why are you using firebase? What other options do you have to
              implement authentication?
            </AccordionHeader>
            <AccordionBody>
              Firebase is google products. It serves the application to identify
              whether a user is authentic or also it is used for authorization
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} animate={customAnimation}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              How does the private route work?
            </AccordionHeader>
            <AccordionBody>
              Private route is a route the user is not allowed to vistite he is
              logged in. If the user full fills the condition of authentication
              then he will be permitted to visite certain private route
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 4} animate={customAnimation}>
            <AccordionHeader onClick={() => handleOpen(4)}>
              What is node? How does the node work?
            </AccordionHeader>
            <AccordionBody>
              Node is javascript asynchronous behaviour.Node js is designed to
              build scaleable server side application. It is a used as backend
              service where javascript works on the server-side of the
              application. This way javascript is used on both frontend and
              backend. Node. js runs on chrome v8 engine which converts
              javascript code into machine code, it
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
    </div>
  );
}

export default Blog;
