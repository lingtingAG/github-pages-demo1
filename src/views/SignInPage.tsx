import { defineComponent, PropType, reactive } from 'vue';
import s from './SignInPage.module.scss';
import { MainLayout } from '../layouts/MainLayout';
import { Icon } from '../shared/Icon';
import { Form, FormItem } from '../shared/Form';
import { Button } from '../shared/Button';
import { validate } from '../shared/validate';

export const SignInPage = defineComponent({
  setup: (props, context) => {
    const formData = reactive({
      email: '',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: [],
    })
    const onSubmit = (e: Event) => {
      e.preventDefault();
      Object.assign(errors, {
        email: [],
        code: [],
      })
      const newErrors = validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/ , message: '必须是邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ])
      Object.assign(errors, newErrors);
    }
    return () => (
      <MainLayout>{
        {
          title: () => '登陆',
          icon: () => <Icon name="back" class={s.navIcon} />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <Icon name="logo" class={s.icon} />
                <h1 class={s.appName}>山竹记账</h1>
              </div>
              <Form onSubmit={onSubmit}>
                <FormItem label="邮箱地址" type="text" v-model={formData.email} error={errors.email?.[0]} placeholder='请输入邮箱，然后点击发送验证码'></FormItem>
                <FormItem label="验证码" type="validationCode" v-model={formData.code} error={errors.code?.[0]} placeholder='输入六位数字'></FormItem>
                <FormItem style={{ paddingTop: '50px' }}>
                  <Button class={s.submit}>登陆</Button>
                </FormItem>
              </Form>
            </div>
          )
        }
      }</MainLayout>
    )
  }
})