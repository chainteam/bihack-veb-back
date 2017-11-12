import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { FormComponentProps } from 'antd/lib/form/Form';
const FormItem = Form.Item;

interface ILoginForm extends FormComponentProps {
    submit?: (formObject: {title: string, owner: string, value: string}) => void;
}

class NormalLoginForm extends React.Component<ILoginForm, any> {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.submit(values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input title!' }],
                    })(
                        <Input prefix={<Icon type="star" style={{ fontSize: 13 }} />} placeholder="Title" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('owner', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Owner" />
                        )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('value', {
                        rules: [{ required: true, message: 'Please input your value!' }],
                    })(
                        <Input prefix={<Icon type="pay-circle" style={{ fontSize: 13 }} />} placeholder="Value" />
                        )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Add Object
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);
export default WrappedNormalLoginForm;