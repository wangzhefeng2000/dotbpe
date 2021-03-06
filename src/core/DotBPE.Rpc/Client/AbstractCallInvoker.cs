using System;
using System.Threading.Tasks;
using DotBPE.Rpc.Codes;

namespace DotBPE.Rpc.Client {
    public abstract class AbstractCallInvoker<TMessage> : ICallInvoker<TMessage> where TMessage : InvokeMessage {
        private readonly IRpcClient<TMessage> _client;

        public AbstractCallInvoker (IRpcClient<TMessage> client) {
            this._client = client;
            this._client.Recieved -= MessageRecieved;
            this._client.Recieved += MessageRecieved;
        }

        public IRpcClient<TMessage> RpcClient {
            get {
                return this._client;
            }
        }

        protected abstract void MessageRecieved (object sender, MessageRecievedEventArgs<TMessage> e);

        /// <summary>
        /// Invokes a simple remote call in a blocking fashion.
        /// </summary>
        public abstract TMessage BlockingCall (TMessage request, int timeOut = 3000);

        /// <summary>
        /// Asynchronouses the call.
        /// </summary>
        /// <param name="request">The request.</param>
        /// <param name="timeOut">The time out.</param>
        /// <returns></returns>
        public abstract Task<TMessage> AsyncCall (TMessage request, int timeOut = 3000);

        public void Dispose () {
            this._client.Dispose ();
        }
    }
}