import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, phone, email, address, birth, job, motivation } = await request.json();

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: process.env.ADMIN_EMAIL }],
            subject: '서울다락 조합원 가입 신청',
          },
        ],
        from: { email: process.env.FROM_EMAIL },
        content: [
          {
            type: 'text/html',
            value: `
              <h2>새로운 조합원 가입 신청이 있습니다</h2>
              <p><strong>이름:</strong> ${name}</p>
              <p><strong>연락처:</strong> ${phone}</p>
              <p><strong>이메일:</strong> ${email}</p>
              <p><strong>주소:</strong> ${address}</p>
              ${birth ? `<p><strong>생년월일:</strong> ${birth}</p>` : ''}
              ${job ? `<p><strong>직업:</strong> ${job}</p>` : ''}
              <p><strong>가입 동기:</strong></p>
              <p>${motivation}</p>
            `,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error('이메일 전송 실패');
    }

    return NextResponse.json({ message: '이메일이 성공적으로 전송되었습니다.' });
  } catch (error) {
    console.error('이메일 전송 중 오류 발생:', error);
    return NextResponse.json({ error: '이메일 전송에 실패했습니다.' }, { status: 500 });
  }
} 