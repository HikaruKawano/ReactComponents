import { ReactNode } from "react";
import { Button, Container, Input, Label } from "../../atom";
import Form from "../../atom/form";
import React from "react";

interface props {
  children?: ReactNode;
  isEdit?: boolean;
}

const Auth = {
  Login: {
    root: Container,
    form: Form,
    input: Input,
    Label: Label,
    button: Button,
  },
  Register: {
    root: Container,
    form: Form,
    input: Input,
    Label: Label,
    button: Button,
  },
};

export const Template = {
  Components: Auth.Login,

  Login: ({ children, isEdit = false }: props) => {
    let compEmail;
    let compEmailProps;
    let compPassword;
    let compPasswordProps;
    const addChildren: React.ReactNode[] = [];

    if (children) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          const classname = child.props.className as string;
          if (isEdit && classname) {
            {
              classname == "Email"
                ? ((compEmail = child.props.children),
                  (compEmailProps = child.props))
                : ((compPassword = child.props.children),
                  (compPasswordProps = child.props));
            }
          } else if (isEdit && !classname) {
            addChildren.push(child);
          }
        }
      });
    }

    return (
      <Auth.Login.root>
        <Auth.Login.form id="" name="">
          <Auth.Login.Label props={compEmailProps}>
            {compEmail ? compEmail : "Email"}
          </Auth.Login.Label>
          <Auth.Login.input />
          <Auth.Login.Label props={compPasswordProps}>
            {compPassword ? compPassword : "Senha"}
          </Auth.Login.Label>
          <Auth.Login.input />
          {addChildren}
          <Auth.Login.button>Enviar</Auth.Login.button>
        </Auth.Login.form>
      </Auth.Login.root>
    );
  },

  Register: ({ children, isEdit = false }: props) => {
    let compEmail;
    let compEmailProps;
    let compPassword;
    let compPasswordProps;
    let compConfirmPassword;
    let compConfirmPasswordProps;
    const addChildren: React.ReactNode[] = [];

    if (children) {
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          const classname = child.props.className as string;
          
          if (isEdit && classname) {
            if (classname == "Email") {
              (compEmail = child.props.children),
                (compEmailProps = child.props);
            } else if (classname == "password") {
              (compPassword = child.props.children),
                (compPasswordProps = child.props);
            } else if (classname == "ConfirmPassoword") {
              (compConfirmPassword = child.props.children),
              (compConfirmPasswordProps = child.props);
            } 
          }else if (isEdit && !classname) {
            addChildren.push(child);
          }
        }
      });
    }

    return (
      <Auth.Login.root>
        <Auth.Login.form id="" name="">
          <Auth.Login.Label props={compEmailProps}>
            {compEmail ? compEmail : "Email"}
          </Auth.Login.Label>
          <Auth.Login.input />
          <Auth.Login.Label props={compPasswordProps}>
            {compPassword ? compPassword : "Senha"}
          </Auth.Login.Label>
          <Auth.Login.input />
          <Auth.Login.Label props={compConfirmPasswordProps}>
            {compConfirmPassword ? compConfirmPassword : "Confirmar senha"}
          </Auth.Login.Label>
          <Auth.Login.input />
          {addChildren}
          <Auth.Login.button>Enviar</Auth.Login.button>
        </Auth.Login.form>
      </Auth.Login.root>
    );
  },
};
