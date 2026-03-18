import React from "react";
import MainLayout from "@/components/MainLayout";
import PageBanner from "@/components/PageBanner";
import useScrollReveal from "@/hooks/useScrollReveal";
import { CreditCard, RefreshCcw, ShieldCheck, AlertCircle, Calendar, Receipt, Mail, FileText, UserCheck, Ban } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const PaymentRefund = () => {
  const { language } = useLanguage();
  useScrollReveal();

  return (
    <MainLayout>
      <PageBanner 
        title={language === 'hi' ? "भुगतान और धनवापसी" : "Payment and Refund"}
        subtitle="Payment & Refund Policy"
        backgroundImage="/assets/img/slider.jpg"
        breadcrumb="Refund Policy"
      />
      
      <div className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center" data-reveal>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter italic leading-none text-slate-900">
                Payment Terms, Cancellation{" "}
                <br className="hidden md:block" />& <span className="text-blue-600">Refund Policy</span>
              </h1>
              <p className="text-slate-500 font-bold italic uppercase tracking-widest text-sm">Eduskill Employment Division (Eduskill Technologies Private Limited)</p>
              <p className="text-slate-400 font-black italic tracking-widest uppercase text-xs mt-2">Version: July 01, 2025</p>
            </div>

            <div className="grid gap-8">
              {/* Payment Agreement */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 shadow-sm">
                    <CreditCard className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Payment Agreement</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed font-normal italic text-sm space-y-4">
                  <p>
                    By enrolling in any physical / hybrid / online and / or blended training course or purchasing any of our Services and providing Eduskill Employment Division (Eduskill Group) with your payment information, you hereby agree to these payment terms. To purchase any services or products offered through the Services, you must have Internet access and a current valid accepted payment method as indicated during sign-up process ("Payment Method").
                  </p>
                  <p>
                    You agree to Eduskill Employment Division (Eduskill Group), or its third-party payment provider, storing and accessing your payment information. You also agree to pay the applicable fees for the services or products you purchase as they become due, whether on a one-time, installment, or subscription basis.
                  </p>
                  <p>
                    Fees may vary based on your location, the type of Payment Method used, where your Payment Method was issued, or other contractual arrangements. Your transaction may be subject to foreign exchange fees or differences in prices, including because of exchange rates.
                  </p>
                </div>
              </section>

              {/* Subscription Types */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-indigo-50 rounded-2xl text-indigo-600 shadow-sm">
                    <RefreshCcw className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Subscription Types</h2>
                </div>
                <div className="space-y-8">
                  <div className="p-6 bg-blue-900 rounded-3xl text-white">
                    <h3 className="text-lg font-black uppercase italic mb-3 text-blue-300">Automatic Subscription Based Payments</h3>
                    <p className="text-white/70 text-sm font-bold italic leading-relaxed">
                      BY SELECTING AN AUTOMATIC SUBSCRIPTION BASED ENROLLMENT, YOU EXPRESSLY AUTHORIZE EDUSKILL EMPLOYMENT DIVISION TO AUTOMATICALLY CHARGE THE APPLICABLE RECURRING MONTHLY FEE AND ANY AND ALL APPLICABLE TAXES TO YOUR PAYMENT METHOD UNLESS AND UNTIL YOU CANCEL, ARE REMOVED, OR COMPLETE THE PROGRAM. Your first monthly payment will be charged upon your purchase date.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <h3 className="text-base font-black uppercase italic mb-3 text-slate-900">Bundled Subscription Payments</h3>
                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed">
                      If you elect to purchase access in the form of a bundled offering, you purchase a fixed, multi-month subscription access at a discounted rate. Following the fixed term, you will revert to a monthly automatic subscription payment method at the non-discounted rate indicated on your initial payment check-out page.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <h3 className="text-base font-black uppercase italic mb-3 text-slate-900">Manual Subscription Payments</h3>
                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed">
                      If you elect to pay by manual monthly subscription, you will be required to make a payment each month to manually renew your subscription and maintain your access. If you fail to manually renew, your access will end at the end of the monthly period for which you have paid.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                    <h3 className="text-base font-black uppercase italic mb-3 text-slate-900">Term-Based Payments</h3>
                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed">
                      For courses provided on a fixed-term basis, there will be a one-time fee paid upfront. Your 7-day refund period will commence upon your date of purchase.
                    </p>
                  </div>
                </div>
              </section>

              {/* Personal Information */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-amber-50 rounded-2xl text-amber-600 shadow-sm">
                    <UserCheck className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Personal Information Collected</h2>
                </div>
                <div className="prose prose-slate max-w-3xl text-slate-600 leading-relaxed font-normal italic text-sm">
                  <p>
                    Eduskill Employment Division collects information in several ways. When you register for a course, we may ask for contact information such as your name, address, telephone number and e-mail address, and for billing information. We may also ask you to complete certain forms or surveys that gather information about you, your academic background, business, profession, job and your opinions or comments. Correspondence sent to us by you or by third parties about your activities may be collected into a file specific to you.
                  </p>
                </div>
              </section>

              {/* Cancellation & Refund */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-red-50 rounded-2xl text-red-600 shadow-sm">
                    <Ban className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Cancellation & Refund Policy</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Cancelling Automatic Subscription</h4>
                    <p className="text-slate-500 text-sm font-bold italic">
                      You may cancel your automatic subscription at any time via Subscription & Billing in your account Settings. You must cancel the day before your next billing date to avoid the next month's charge. After cancellation, you retain access until the end of the current period.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Pre-Order Cancellation</h4>
                    <p className="text-slate-500 text-sm font-bold italic">
                      You may cancel your pre-order subscription at any time during the pre-order period, prior to the date your Payment Method is charged.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Bundled Offering Cancellation</h4>
                    <p className="text-slate-500 text-sm font-bold italic">
                      You will be provided a two (2) day cancellation and refund period. Following this period, there will be no further refunds, including no partial refunds, for termination during the fixed multi-month term.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Manual Subscription Cancellation</h4>
                    <p className="text-slate-500 text-sm font-bold italic">
                      A two (2) day cancellation and refund period is provided. Students are only entitled to one refund per course. Cancel via Subscription & Billing in your account Settings and confirm with an Enrollment Advisor.
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-black text-slate-900 uppercase italic text-sm mb-3">Term-Based Cancellation</h4>
                    <p className="text-slate-500 text-sm font-bold italic">
                      Users have two (2) days from the first date for a full refund. Contact an Enrollment Advisor via phone (India only) or online chat. Fees paid are thereafter non-refundable for that Term.
                    </p>
                  </div>
                </div>
              </section>

              {/* Binding Clauses */}
              <section className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-slate-100" data-reveal>
                <div className="flex items-center gap-6 mb-8">
                  <div className="p-4 bg-red-50 rounded-2xl text-red-600 shadow-sm">
                    <AlertCircle className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 italic uppercase tracking-tight">Binding Clauses</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    "No partial usage refunds",
                    "Limit 1 refund per course",
                    "3rd party market rules apply",
                    "15-day notice for fee changes"
                  ].map((note, i) => (
                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border-t-4 border-red-500 font-black italic uppercase text-[10px] tracking-widest text-slate-600 flex flex-col justify-between items-center text-center shadow-sm">
                      <AlertCircle className="h-4 w-4 mb-2 text-red-500 opacity-20" />
                      {note}
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm text-slate-600 font-normal italic leading-relaxed">
                  <p>
                    <strong>Refunds:</strong> Other than stated above, Eduskill Employment Division will not offer refunds on any fees and charges. This includes any partially used or unused periods. We do not guarantee refunds for lack of usage or dissatisfaction. Upon termination of your subscription, you will not be charged for future monthly fees but will not be issued a refund for previously charged fees.
                  </p>
                  <p>
                    <strong>Price Changes:</strong> We reserve the right to modify fees. If we notify you at least fifteen (15) days in advance, your continued use constitutes acceptance. If you do not wish to continue, you may cancel at any time.
                  </p>
                  <p>
                    <strong>Taxes:</strong> You agree to pay all applicable sales, use, value added, transaction taxes, or other government-required charges. GST / VAT will be calculated and added at checkout where required.
                  </p>
                  <p>
                    <strong>Credit Card Billing:</strong> Credit card payments are processed by our third-party payment processor(s). If any fee is not paid in a timely manner, we reserve the right to terminate your account or suspend access. If your payment details change, your card provider may provide us with updated card details.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section className="bg-blue-900 p-12 rounded-[3.5rem] shadow-2xl text-center text-white overflow-hidden relative" data-reveal>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px]" />
                <div className="relative z-10">
                  <div className="p-3 bg-white/10 rounded-full inline-flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/5">
                    <Receipt className="h-4 w-4 text-blue-400" />
                    Verified Billing Support
                  </div>
                  <p className="text-xl font-bold mb-4 opacity-80 leading-tight italic">
                    For any information, please mark your email with subject line "Subscription"
                  </p>
                  <a 
                    href="mailto:info@eduskill.org?subject=Subscription" 
                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white font-black uppercase italic tracking-widest rounded-2xl hover:bg-white hover:text-blue-600 transition-all text-sm shadow-xl"
                  >
                    <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    info@eduskill.org
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentRefund;
