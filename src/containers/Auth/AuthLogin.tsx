import { FC, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  // Divider,
  Checkbox,
  Anchor,
  Stack,
} from '@mantine/core';
// import { GoogleBtn } from '../../components';

interface LoginProps {
  closeModal: () => void;
}

const AuthLogin: FC<LoginProps & PaperProps> = ({ closeModal, ...props }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [type, toggle] = useToggle(['login', 'register']);
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      password2: '',
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
    },
  });

  const submitHandler = async (values: any) => {
    setLoading(true);
    try {
      const url =
        type === 'login'
          ? `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/login`
          : `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/auth/register`;

      const response = await axios.post(url, {
        email: values.email,
        password: values.password,
        password2: values.password2,
        username: values.username,
      });

      if (type === 'login') {
        localStorage.setItem('NotAToken', response.data.token);
        navigate('/');
        closeModal(); // Close the modal on successful login
      } else {
        navigate('/');
        closeModal(); // Close the modal on successful registration
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        // Type guard to check if error is an Axios error
        if (error.response) {
          setStatusMessage(error.response.data.message);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      } else {
        console.log('Unexpected error', error);
      }
    }
  };

  return (
    <Paper radius="md" p="xl" {...props}>
      <Text size="xl" fw={600} mb={'xl'} mt={-20} color="#404040">
        Welcome to Pomodoro AI, {type} with
      </Text>

      {statusMessage && (
        <Text size="sm" color="red">
          {statusMessage}
        </Text>
      )}

      {/* <Group grow mb="md" mt="md">
        <GoogleBtn radius="xl">Google</GoogleBtn>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="xl" /> */}

      <form onSubmit={form.onSubmit(submitHandler)}>
        <Stack>
          {type === 'register' && (
            <TextInput
              label="Username"
              placeholder="Your username"
              value={form.values.username}
              onChange={(event) =>
                form.setFieldValue('username', event.currentTarget.value)
              }
              radius="md"
            />
          )}

          <TextInput
            required
            label="Email"
            placeholder="yahoo@gmail.com"
            value={form.values.email}
            onChange={(event) =>
              form.setFieldValue('email', event.currentTarget.value)
            }
            error={form.errors.email && 'Invalid email'}
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue('password', event.currentTarget.value)
            }
            error={
              form.errors.password &&
              'Password should include at least 6 characters'
            }
            radius="md"
          />
          {type === 'register' && (
            <PasswordInput
              required
              label="Confirm Password"
              placeholder="Confirm Password"
              value={form.values.password2}
              onChange={(event) =>
                form.setFieldValue('password2', event.currentTarget.value)
              }
              error={
                form.errors.password2 &&
                'Password should include at least 6 characters'
              }
              radius="md"
            />
          )}
          {type === 'register' && (
            <Checkbox
              color="#23bab1"
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue('terms', event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === 'register'
              ? 'Already have an account? Login'
              : "Don't have an account? Register"}
          </Anchor>
          <Button type="submit" radius="xl" color="#23bab1" loading={loading}>
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default AuthLogin;
